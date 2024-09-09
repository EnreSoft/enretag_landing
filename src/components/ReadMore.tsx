export default function ReadMoreLink(props: { pageLink: string }) {
  return (
    <a
      href={props.pageLink}
      className="text-white bg-button-bg-color hover:bg-hover-button-bg-color focus:ring-4 focus:text-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Read more
    </a>
  );
}
