'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Shield, Cpu, ArrowRight, Github, Twitter, CheckCircle } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('compute');
  const [terminalText, setTerminalText] = useState('');
  const fullText = '$ minechain deploy --gpu RTX-5090 --region us-west\n✓ Node initialized\n✓ Compute ready\n✓ Accepting jobs...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "RTX 5090 Compute",
      description: "Access high-performance GPU compute on-demand. Pay only for what you use."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Deployment",
      description: "Deploy nodes in seconds. Scale from 1 to 1000 GPUs instantly."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "USDC Payments",
      description: "Pay with USDC on Base L2. No credit cards. No gatekeepers."
    }
  ];

  const pricing = [
    {
      tier: "Starter",
      price: "$0.50",
      unit: "/hour",
      features: ["1x RTX 5090", "100GB Storage", "API Access", "Community Support"]
    },
    {
      tier: "Pro",
      price: "$4.00",
      unit: "/hour",
      features: ["10x RTX 5090", "1TB Storage", "Priority API", "24/7 Support", "Custom Endpoints"],
      highlight: true
    },
    {
      tier: "Enterprise",
      price: "Custom",
      unit: "pricing",
      features: ["Unlimited GPUs", "Custom Storage", "Dedicated Infra", "SLA Guarantee", "White Label"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-green-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold text-green-400">MineChain</span>
              <span className="text-xs text-gray-500">.ai</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-green-400 transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-green-400 transition">Pricing</a>
              <a href="https://docs.minechain.ai" className="text-gray-300 hover:text-green-400 transition">Docs</a>
              <a href="https://node.minechain.ai" className="text-gray-300 hover:text-green-400 transition">Dashboard</a>
              <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-semibold transition">
                Launch App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20">
                  🚀 Now Live on Base L2
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Decentralized
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"> GPU Compute</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Deploy high-performance compute nodes in seconds. Pay with USDC. Scale infinitely. No gatekeepers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="border border-green-500/50 hover:border-green-500 text-green-400 px-8 py-4 rounded-lg font-bold text-lg transition">
                  View Docs
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>14 Nodes Online</span>
                </div>
                <div>|</div>
                <div>450+ TFLOPs Available</div>
              </div>
            </div>

            {/* Terminal Animation */}
            <div className="bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm text-gray-400">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm h-64 overflow-hidden">
                <pre className="text-green-400 whitespace-pre-wrap">{terminalText}</pre>
                <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Scale</h2>
            <p className="text-xl text-gray-400">Enterprise-grade infrastructure. Web3-native payments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-900 border border-green-500/20 rounded-lg p-8 hover:border-green-500/50 transition group">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 text-green-400 group-hover:bg-green-500/20 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-400">Pay only for what you use. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div key={idx} className={`rounded-lg p-8 ${plan.highlight ? 'bg-green-500/10 border-2 border-green-500 scale-105' : 'bg-gray-900 border border-green-500/20'}`}>
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.highlight ? 'bg-green-500 hover:bg-green-600 text-black' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-y border-green-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale?</h2>
          <p className="text-xl text-gray-400 mb-8">Join developers building the future of decentralized compute.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
              Launch Node
            </button>
            <button className="border border-green-500/50 hover:border-green-500 text-green-400 px-8 py-4 rounded-lg font-bold text-lg transition">
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-green-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-6 h-6 text-green-400" />
                <span className="text-lg font-bold text-green-400">MineChain</span>
              </div>
              <p className="text-gray-400 text-sm">Decentralized GPU compute infrastructure for the next generation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://docs.minechain.ai" className="hover:text-green-400 transition">Documentation</a></li>
                <li><a href="https://git.minechain.ai" className="hover:text-green-400 transition">GitHub</a></li>
                <li><a href="https://node.minechain.ai" className="hover:text-green-400 transition">Node Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MineChain. Built with ⚡ on Base L2.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
