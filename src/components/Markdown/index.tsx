import Renderer from "./Renderer";

type Props = {
  md: string;
  className?: string;
};

export default function Markdown(props: Props) {
  return (
    <article className={props.className}>
      <Renderer md={props.md} />
    </article>
  );
}
