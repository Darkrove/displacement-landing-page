interface OverlayProps {
  LINE: string;
  SIZE: number;
}

export const Overlay = ({ LINE, SIZE }: OverlayProps) => (
  <>
    <span
      style={{
        position: "absolute",
        bottom: "50%",
        left: "50%",
        fontSize: `${SIZE}vw`,
        fontWeight: 500,
        lineHeight: 1,
        color: "hsla(0, 100%, 50%, 0)",
        transform: "translateX(-50%) translateY(50%)",
        whiteSpace: "nowrap",
      }}
    >
      {LINE}
    </span>
    <span
      style={{
        position: "absolute",
        bottom: "10%",
        left: "50%",
        fontSize: `1.75vw`,
        fontWeight: 200,
        color: "hsla(0, 0%, 95%, 1)",
        transform: "translateX(-50%) translateY(50%)",
        whiteSpace: "nowrap",
        textAlign: "center",
      }}
    >
      made by{" "}
      <a
        href="https://github.com/Darkrove"
        target="_blank"
        rel="noreferrer"
        className="underline text-stone-200"
      >
        sajjad shaikh
      </a>{" "}
    </span>
  </>
);
