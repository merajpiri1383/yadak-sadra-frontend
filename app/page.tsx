import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getIndex } from "@/lib/api";
import HomePageClient from "@/app/components/homePageclient";



const Page = async () => {

    const queryclient = new QueryClient();

    await queryclient.prefetchQuery({
        queryKey: ["index"],
        queryFn: getIndex
    })

    return (
        <HydrationBoundary state={dehydrate(queryclient)}>
            <HomePageClient />
        </HydrationBoundary>
    )
}; export default Page;