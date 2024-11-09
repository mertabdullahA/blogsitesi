// app/blog/[id]/page.js
export default async function BlogDetail({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
  
    return (
      <div style={{ padding: '20px' }}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
  