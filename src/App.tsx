import { useState } from "react";

export function App() {
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState<string[]>([]);

  const submitCourse = () => {
    // Currently all this function does is add the user's input to the list.
    // How can we get the app to display additional data?
    const id = courseId.replaceAll(/ /g, "").toUpperCase();
    setCourseId("");
    setCourses([...courses, id]);
  };

  return (
    <>
      <h1>Favorite Courses</h1>
      <ul>{...courses.map((course) => <li key={course}>{course}</li>)}</ul>
      <label>
        Type in the number of a course you like:
        <input value={courseId} onChange={(e) => setCourseId(e.target.value)} />
      </label>
      <button type="submit" onClick={submitCourse}>
        Submit
      </button>
    </>
  );
}
