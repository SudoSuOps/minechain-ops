import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/intro'],
    },
    {
      type: 'category',
      label: 'For Tenants',
      items: [
        'for-tenants/overview',
        'for-tenants/browse-providers',
      ],
    },
    {
      type: 'category',
      label: 'For Providers',
      items: [
        'for-providers/overview',
        'for-providers/hardware-requirements',
        'for-providers/onboarding',
        'for-providers/lease-terms',
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      items: [
        'platform/how-it-works',
        'platform/pricing',
      ],
    },
  ],
};

export default sidebars;
