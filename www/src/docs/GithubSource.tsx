const GithubSource = (props: {name: string}) => {
  const name = props.name.split(".");
  return (
    <span class="float-end">
      <a
        href={`https://github.com/solid-libs/solid-bootstrap/blob/master/www/src/docs/${name[0]}.${
          name[1] ?? "tsx"
        }?plain=1`}
        rel="noopener"
        target="_blank"
      >
        View source on Github
      </a>
    </span>
  );
};

export default GithubSource;
