const GithubSource = (props: { name: string }) => (
  <span className="float-end">
    <a
      href={`https://github.com/solid-libs/solid-bootstrap/blob/master/www/src/docs/${props.name}.tsx`}
      target="_blank"
    >
      View source on Github
    </a>
  </span>
);

export default GithubSource;
