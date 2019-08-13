import Link from 'umi/link';

export default () =>
  <>
    <h1>Index Page</h1>
    <h2>Pages</h2>
    <ul>
      <li><Link to="/dashboard/add">/dashboard/add</Link></li>
      <li><Link to="/dashboard/subtract">/dashboard/subtract</Link></li>
    </ul>
  </>
