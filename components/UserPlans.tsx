import { client } from '@/sanity/lib/client';
import React from 'react'
import PlanCard, { PlanCardType } from '@/components/PlanCard';
import { PLANS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries';

const UserPlans = async ({ id }: { id: string }) => {
    const plans = await client.fetch(PLANS_BY_AUTHOR_QUERY, { id });
  return (
    <>
        {plans.length > 0 ? (
        plans.map((plan: PlanCardType) => (
          <PlanCard key={plan._id} post={plan} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  )
}

export default UserPlans;