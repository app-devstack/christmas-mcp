import { ServerBadge } from '@/features/home/components/serverBadge';
import { HomeHeader } from '@/features/home/components/homeHeader';
import { EndpointInfoCard } from '@/features/home/components/endpointInfoCard';
import { ToolsListSection } from '@/features/home/components/toolsListSection';

import { MCP_INFO } from '@/features/home/constants/mcpInfo';

/**
 * ホームページ
 */
export default function HomePage() {
  const { server, tools } = MCP_INFO;

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-600 to-green-900 py-8 px-4">
      <div className="max-w-3xl mx-auto relative">
        <ServerBadge serverName={server.name} />
        <HomeHeader title="🎄 Christmas MCP" description={server.description} />
        <EndpointInfoCard />
        <ToolsListSection tools={tools} />
      </div>
    </main>
  );
}
