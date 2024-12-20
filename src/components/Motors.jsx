import { motors } from "../assets/data";
import Motor from "./Motor";

function Motors() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {motors?.map((motor, index) => (
          <Motor key={index} motor={motor} />
        ))}
      </div>
    </>
  );
}

export default Motors;
