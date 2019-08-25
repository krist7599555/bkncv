import blocksToHtml from '@sanity/block-content-to-html';
import client from '../../sanityClient';
import serializers from '../../components/serializers';
import { urlFor } from '../../components/serializers';

export async function posts() {
  return client
    .fetch(
      '*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)'
    )
    .then(posts => {
      console.log(posts);
      return posts;
    })
    .catch(err => this.error(500, err));
}
export async function post(slug) {
  const filter = '*[_type == "post" && slug.current == $slug][0]';
  const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            author->
          }
        }
      }
    }`;
  const query = filter + projection;
  const post = await client.fetch(query, { slug }).catch(err => {
    return this.error(500, err);
  });
  post.mainImage.url = urlFor(post.mainImage).url();
  post.body = blocksToHtml({
    blocks: post.body,
    serializers,
    ...client.clientConfig
  });
  console.log(post);
  return post;
}

export default { post, posts };
