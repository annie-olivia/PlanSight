import { auth } from "@/auth";
import PlanCard, { PlanCardType } from "@/components/PlanCard";
import SearchBar from "@/components/SearchBar";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { PLANS_QUERY } from "@/sanity/lib/queries";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;
  const params= { search: query || null};

  const session= await auth();

  console.log(session?.id);

  // const posts = await client.fetch(PLANS_QUERY);
  const { data: posts } = await sanityFetch({query: PLANS_QUERY, params});
  
  return (
      <>
        <section className="pink_container">
          <h1 className="heading">Pitch Your Plan,
          <br/>
          Connect with Entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            Submit Plans, Vote on Pitches and Get Noticed in Virtual Competitons.
          </p>
          <SearchBar query={query}>
          </SearchBar>
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"`: "All Plans"}
          </p>
          <ul className="mt-7 card_grid">
            {posts?. length> 0 ?(
              posts.map((post: PlanCardType)=> (
                <PlanCard key={post?._id} post={post}/>
              ))
            ): (
              <p className="no-results">No plans found</p>
            )}
          </ul>
        </section>
        <SanityLive />
        
      </>
  );
}
