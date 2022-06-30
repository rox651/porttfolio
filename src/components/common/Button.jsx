export default function Button({ dw, rec, children }) {
  return (
    <a
      href={dw || rec}
      target={dw ? "_new" : ""}
      className="shadow-xl cursor-pointer text-center  shadow-newblue-500/50 bg-newblue-500 text-white px-5 py-2 rounded-md transition-all hover:bg-newblue-400 hover:translate-y-2"
    >
      {children}
    </a>
  );
}
