// app/page.js
import Link from 'next/link';

export default async function HomePage() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div style={{ padding: '20px' }}>
      <h2  className='bg-red-600'>Blog Listesi</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: '10px 0' }}>
            <Link href={`/blog/${post.id}`}>
             {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
