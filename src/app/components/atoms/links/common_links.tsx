import { Link } from "../../../../../shared";

const MediumLinkDark = (props: any) => {
  return (
    <Link
      href={props.link}
      className="p-2 bg-primary text-white rounded-full text-sm hover:bg-primary-light "
    >
      {props.title}
    </Link>
  );
};

export { MediumLinkDark };
