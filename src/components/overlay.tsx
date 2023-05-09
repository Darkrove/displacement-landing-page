interface OverlayProps {
  LINE_1: string;
  LINE_2: string;
  SIZE: number;
}

export const Overlay = ({ LINE_1, LINE_2, SIZE }: OverlayProps) => (
  <>
    <span
      style={{
        position: "absolute",
        bottom: "50%",
        left: "50%",
        fontSize: `${SIZE / 7}vw`,
        fontWeight: 200,
        lineHeight: 1,
        color: "hsla(0, 100%, 50%, 0)",
        transform: "translateX(-50%) translateY(calc(50% - 20vh))",
        whiteSpace: "nowrap",
      }}
    >
      {LINE_1}
    </span>
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
      {LINE_2}
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
