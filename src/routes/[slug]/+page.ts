import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  try {
    const slug = params['slug'];
    // console.log(slug);
    const res = await fetch(`/${slug}.md`);
    if (res.status !== 200) {
      throw new Error();
    }

    const post = await res.text();
    // console.log(post);

    return {
      slug,
      post: post
    };
  } catch (e) {
    throw e;
  }
};
