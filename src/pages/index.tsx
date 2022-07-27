import Head from 'next/head';
import { Component } from 'react';

function HomePage({ content }: any) {
  return (
    <>
      <article>
        <h1>{content.title}</h1>
      </article>
    </>
  );
}

export async function getStaticProps() {
  const { default: content } = await import('../../content/pages/home.md');
  return {
    props: {
      content,
    },
  };
}
export default HomePage;
