const GithubSource = (props: { name: string }) => {
  const name = props.name.split('.');
  return (
    <span className="float-end">
      <a
        href={`https://github.com/solid-libs/solid-bootstrap/blob/master/www/src/docs/${name[0]}.${name[1] ?? "tsx"}`}
        target="_blank"
      >
        View source on Github
      </a>
    </span>
  )
};

export default GithubSource;
