import './globals.css';

 function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
          <h1 className='text-center'>My Blog</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '20px', textAlign: 'center' }}>
          © 2024 My Blog
        </footer>
      </body>
    </html>
  );
}
export default  RootLayout