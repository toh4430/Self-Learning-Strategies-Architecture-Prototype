"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

export default function TradingStrategyDiagram() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Hybrid ML Trading Strategy: Complete Architecture</h1>

      <Tabs defaultValue="architecture" className="w-full max-w-4xl mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="architecture">Technical Architecture</TabsTrigger>
          <TabsTrigger value="concept">Concept Diagram</TabsTrigger>
          <TabsTrigger value="business">Business Analysis</TabsTrigger>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="mt-4">
          <div className="max-w-4xl w-full flex flex-col gap-4">
            {/* Data Sources */}
            <div className="flex flex-col">
              <Card className="bg-blue-50 border-blue-200 p-4">
                <h2 className="text-xl font-semibold text-blue-700 text-center mb-4">Multi-Source Data Integration</h2>
                <div className="grid grid-cols-4 gap-3">
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center mb-1">CryptoQuant</h3>
                    <p className="text-xs text-blue-700 text-center">Exchange Flows, Miner Data</p>
                  </Card>
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center mb-1">Glassnode</h3>
                    <p className="text-xs text-blue-700 text-center">SOPR, MVRV, NVT Ratio</p>
                  </Card>
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center mb-1">Coinglass</h3>
                    <p className="text-xs text-blue-700 text-center">Funding Rates, Open Interest</p>
                  </Card>
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center mb-1">Exchange APIs</h3>
                    <p className="text-xs text-blue-700 text-center">OHLCV, Order Book Data</p>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-blue-200"></div>
              </div>
            </div>

            {/* Feature Engineering */}
            <div className="flex flex-col">
              <Card className="bg-green-50 border-green-200 p-4">
                <h2 className="text-xl font-semibold text-green-700 text-center mb-4">Advanced Feature Engineering</h2>
                <div className="grid grid-cols-4 gap-3">
                  <Card className="bg-green-100 p-3">
                    <h3 className="font-medium text-green-800 text-center mb-1">Technical Indicators</h3>
                    <p className="text-xs text-green-700 text-center">RSI, MACD, Bollinger Bands</p>
                  </Card>
                  <Card className="bg-green-100 p-3">
                    <h3 className="font-medium text-green-800 text-center mb-1">On-chain Metrics</h3>
                    <p className="text-xs text-green-700 text-center">Normalized Exchange Flows</p>
                  </Card>
                  <Card className="bg-green-100 p-3">
                    <h3 className="font-medium text-green-800 text-center mb-1">Statistical Features</h3>
                    <p className="text-xs text-green-700 text-center">Z-scores, Correlations</p>
                  </Card>
                  <Card className="bg-green-100 p-3">
                    <h3 className="font-medium text-green-800 text-center mb-1">Pattern Features</h3>
                    <p className="text-xs text-green-700 text-center">Chart Patterns, Market Structure</p>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-green-200"></div>
              </div>
            </div>

            {/* ML Models */}
            <div className="flex flex-col">
              <Card className="bg-orange-50 border-orange-200 p-4">
                <h2 className="text-xl font-semibold text-orange-700 text-center mb-4">
                  Hybrid Machine Learning Models
                </h2>
                <div className="grid grid-cols-4 gap-3">
                  <Card className="bg-orange-100 p-3">
                    <h3 className="font-medium text-orange-800 text-center mb-1">CNN-LSTM</h3>
                    <p className="text-xs text-orange-700 text-center">Pattern Recognition</p>
                    <div className="mt-2 space-y-1">
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">Conv1D(32)</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">Conv1D(64)</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">LSTM(64, 32)</div>
                    </div>
                  </Card>
                  <Card className="bg-orange-100 p-3">
                    <h3 className="font-medium text-orange-800 text-center mb-1">LightGBM</h3>
                    <p className="text-xs text-orange-700 text-center">Classification & Feature Importance</p>
                    <div className="mt-2 space-y-1">
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">n_estimators=100</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">max_depth=10</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">Feature Ranking</div>
                    </div>
                  </Card>
                  <Card className="bg-orange-100 p-3">
                    <h3 className="font-medium text-orange-800 text-center mb-1">Hidden Markov Model</h3>
                    <p className="text-xs text-orange-700 text-center">Market Regime Detection</p>
                    <div className="mt-2 space-y-1">
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">n_components=3</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">covariance=&quot;full&quot;</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">Regime Probabilities</div>
                    </div>
                  </Card>
                  <Card className="bg-orange-100 p-3">
                    <h3 className="font-medium text-orange-800 text-center mb-1">Reinforcement Learning</h3>
                    <p className="text-xs text-orange-700 text-center">Adaptive Trading Policy</p>
                    <div className="mt-2 space-y-1">
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">PPO Agent</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">Custom Environment</div>
                      <div className="bg-orange-200 text-xs p-1 rounded text-center">Risk-Adjusted Reward</div>
                    </div>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-orange-200"></div>
              </div>
            </div>

            {/* Ensemble Integration */}
            <div className="flex flex-col">
              <Card className="bg-purple-50 border-purple-200 p-4">
                <h2 className="text-xl font-semibold text-purple-700 text-center mb-4">Ensemble Integration</h2>
                <div className="text-center">
                  <p className="font-medium text-purple-800">
                    Weighted Prediction = 0.35×CNN-LSTM + 0.35×LightGBM + 0.25×LSTM + 0.05×RL
                  </p>
                  <p className="text-xs text-purple-700 mt-1">
                    Dynamic weights adjusted based on model performance and market regime
                  </p>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-purple-200"></div>
              </div>
            </div>

            {/* Signal Generation */}
            <div className="flex flex-col">
              <Card className="bg-red-50 border-red-200 p-4">
                <h2 className="text-xl font-semibold text-red-700 text-center mb-4">
                  Signal Generation & Position Sizing
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  <Card className="bg-red-200 p-3">
                    <h3 className="font-medium text-red-800 text-center">Regime-based Thresholds</h3>
                  </Card>
                  <Card className="bg-red-200 p-3">
                    <h3 className="font-medium text-red-800 text-center">Risk Parity Sizing</h3>
                  </Card>
                  <Card className="bg-red-200 p-3">
                    <h3 className="font-medium text-red-800 text-center">Volatility Adjustments</h3>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-red-200"></div>
              </div>
            </div>

            {/* Trade Execution */}
            <div className="flex flex-col">
              <Card className="bg-green-50 border-green-200 p-4">
                <h2 className="text-xl font-semibold text-green-700 text-center mb-4">
                  Trade Execution & Risk Management
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  <Card className="bg-green-100 p-3">
                    <h3 className="font-medium text-green-800 text-center">Dynamic Stop-Loss</h3>
                  </Card>
                  <Card className="bg-green-100 p-3">
                    <h3 className="font-medium text-green-800 text-center">Trailing Take-Profit</h3>
                  </Card>
                  <Card className="bg-green-100 p-3">
                    <h3 className="font-medium text-green-800 text-center">Drawdown Protection</h3>
                  </Card>
                </div>
              </Card>
            </div>

            {/* Monitoring & Explanation */}
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-green-200"></div>
              </div>
              <Card className="bg-blue-50 border-blue-200 p-4">
                <h2 className="text-xl font-semibold text-blue-700 text-center mb-4">Monitoring & Explainable AI</h2>
                <div className="grid grid-cols-4 gap-3">
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center">Performance Metrics</h3>
                  </Card>
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center">SHAP Values</h3>
                  </Card>
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center">Feature Importance</h3>
                  </Card>
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center">Trade Explanations</h3>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="concept" className="mt-4">
          <div className="max-w-4xl w-full flex flex-col gap-6">
            {/* Core Concept */}
            <Card className="bg-purple-50 border-purple-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 text-center mb-4">
                Hybrid ML Trading Strategy Concept
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-purple-800 mb-2">Core Philosophy</h3>
                  <p className="text-sm text-purple-700 mb-4">
                    The Hybrid ML Trading Strategy is built on the principle that different market conditions require
                    different trading approaches. By combining multiple machine learning models with dynamic risk
                    management and market regime detection, the strategy can adapt to changing market conditions.
                  </p>
                  <h3 className="text-lg font-medium text-purple-800 mb-2">Adaptive Intelligence</h3>
                  <p className="text-sm text-purple-700">
                    Rather than relying on a single model or approach, the strategy leverages an ensemble of specialized
                    models, each with unique strengths. The system dynamically adjusts model weights based on detected
                    market regimes, creating a self-adapting trading system.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h3 className="text-lg font-medium text-purple-800 mb-3 text-center">Key Components</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-purple-800 text-sm">Multi-Source Data Integration</p>
                        <p className="text-xs text-purple-600">Combines price, on-chain, and exchange data</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-purple-800 text-sm">Hybrid ML Models</p>
                        <p className="text-xs text-purple-600">Ensemble of specialized models for different patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-purple-800 text-sm">Market Regime Detection</p>
                        <p className="text-xs text-purple-600">Identifies current market conditions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-purple-800 text-sm">Dynamic Risk Management</p>
                        <p className="text-xs text-purple-600">Adapts position sizing and stop-losses to conditions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-purple-800 text-sm">Explainable AI</p>
                        <p className="text-xs text-purple-600">Transparent decision-making with SHAP values</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Conceptual Diagram */}
            <Card className="bg-indigo-50 border-indigo-200 p-6">
              <h2 className="text-xl font-semibold text-indigo-700 text-center mb-4">Conceptual Workflow</h2>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-3xl">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Data Layer */}
                    <div className="col-span-3 bg-indigo-100 rounded-lg p-3 text-center">
                      <h3 className="font-medium text-indigo-800 mb-2">Data Layer</h3>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Price Data</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">On-Chain Data</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Exchange Data</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Sentiment Data</p>
                        </div>
                      </div>
                    </div>

                    {/* Processing Layer */}
                    <div className="col-span-3 bg-indigo-100 rounded-lg p-3 text-center relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-indigo-100"></div>
                      </div>
                      <h3 className="font-medium text-indigo-800 mb-2">Processing Layer</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Feature Engineering</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Feature Selection</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Regime Detection</p>
                        </div>
                      </div>
                    </div>

                    {/* Intelligence Layer */}
                    <div className="col-span-3 bg-indigo-100 rounded-lg p-3 text-center relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-indigo-100"></div>
                      </div>
                      <h3 className="font-medium text-indigo-800 mb-2">Intelligence Layer</h3>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">LightGBM</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">CNN-LSTM</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Attention LSTM</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">RL Agent</p>
                        </div>
                      </div>
                    </div>

                    {/* Decision Layer */}
                    <div className="col-span-3 bg-indigo-100 rounded-lg p-3 text-center relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-indigo-100"></div>
                      </div>
                      <h3 className="font-medium text-indigo-800 mb-2">Decision Layer</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Ensemble Integration</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Signal Generation</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Position Sizing</p>
                        </div>
                      </div>
                    </div>

                    {/* Execution Layer */}
                    <div className="col-span-3 bg-indigo-100 rounded-lg p-3 text-center relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-indigo-100"></div>
                      </div>
                      <h3 className="font-medium text-indigo-800 mb-2">Execution Layer</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Order Execution</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Risk Management</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Position Monitoring</p>
                        </div>
                      </div>
                    </div>

                    {/* Feedback Layer */}
                    <div className="col-span-3 bg-indigo-100 rounded-lg p-3 text-center relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-indigo-100"></div>
                      </div>
                      <h3 className="font-medium text-indigo-800 mb-2">Feedback Layer</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Performance Analysis</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Explainable AI</p>
                        </div>
                        <div className="bg-indigo-200 rounded p-2">
                          <p className="text-xs font-medium text-indigo-700">Model Adaptation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Key Innovations */}
            <Card className="bg-teal-50 border-teal-200 p-6">
              <h2 className="text-xl font-semibold text-teal-700 text-center mb-4">Key Innovations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-teal-100 rounded-lg p-3">
                    <h3 className="font-medium text-teal-800 mb-1">Ensemble Learning with Dynamic Weighting</h3>
                    <p className="text-xs text-teal-700">
                      Unlike static ensemble methods, our system dynamically adjusts model weights based on detected
                      market regimes and recent performance, allowing it to adapt to changing market conditions in
                      real-time.
                    </p>
                  </div>
                  <div className="bg-teal-100 rounded-lg p-3">
                    <h3 className="font-medium text-teal-800 mb-1">Multi-Model Architecture</h3>
                    <p className="text-xs text-teal-700">
                      Combines traditional ML (LightGBM), deep learning (CNN-LSTM, Attention LSTM), and reinforcement
                      learning into a unified prediction framework, leveraging the strengths of each approach.
                    </p>
                  </div>
                  <div className="bg-teal-100 rounded-lg p-3">
                    <h3 className="font-medium text-teal-800 mb-1">Integrated On-Chain Data</h3>
                    <p className="text-xs text-teal-700">
                      Incorporates blockchain-specific data like exchange flows, funding rates, and on-chain metrics to
                      capture market dynamics invisible to traditional price-only strategies.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-teal-100 rounded-lg p-3">
                    <h3 className="font-medium text-teal-800 mb-1">Regime-Aware Risk Management</h3>
                    <p className="text-xs text-teal-700">
                      Automatically adjusts position sizing, stop-loss levels, and take-profit targets based on detected
                      market regime and volatility, creating an adaptive risk management system.
                    </p>
                  </div>
                  <div className="bg-teal-100 rounded-lg p-3">
                    <h3 className="font-medium text-teal-800 mb-1">Explainable AI Integration</h3>
                    <p className="text-xs text-teal-700">
                      Uses SHAP values to explain model decisions, providing transparency into the trading process and
                      enabling continuous improvement through feature importance analysis.
                    </p>
                  </div>
                  <div className="bg-teal-100 rounded-lg p-3">
                    <h3 className="font-medium text-teal-800 mb-1">Self-Learning Feedback Loop</h3>
                    <p className="text-xs text-teal-700">
                      Implements a continuous learning system that analyzes trade performance and updates model weights
                      and parameters, allowing the strategy to evolve with changing market conditions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="business" className="mt-4">
          <div className="max-w-4xl w-full flex flex-col gap-4">
            {/* Unique Technology Advantages */}
            <div className="flex flex-col">
              <Card className="bg-amber-50 border-amber-200 p-4">
                <h2 className="text-xl font-semibold text-amber-700 text-center mb-4">Unique Technology Advantages</h2>
                <div className="grid grid-cols-3 gap-3">
                  <Card className="bg-amber-100 p-3">
                    <h3 className="font-medium text-amber-800 text-center mb-1">Hybrid ML Architecture</h3>
                    <p className="text-xs text-amber-700 text-center">
                      Combines multiple ML paradigms for superior pattern recognition across different market conditions
                    </p>
                  </Card>
                  <Card className="bg-amber-100 p-3">
                    <h3 className="font-medium text-amber-800 text-center mb-1">Adaptive Ensemble</h3>
                    <p className="text-xs text-amber-700 text-center">
                      Dynamic model weighting that adjusts to market regimes in real-time
                    </p>
                  </Card>
                  <Card className="bg-amber-100 p-3">
                    <h3 className="font-medium text-amber-800 text-center mb-1">Explainable AI</h3>
                    <p className="text-xs text-amber-700 text-center">
                      SHAP values provide transparency into trading decisions
                    </p>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-amber-200"></div>
              </div>
            </div>

            {/* Market Survival Factors */}
            <div className="flex flex-col">
              <Card className="bg-emerald-50 border-emerald-200 p-4">
                <h2 className="text-xl font-semibold text-emerald-700 text-center mb-4">Market Survival Factors</h2>
                <div className="grid grid-cols-4 gap-3">
                  <Card className="bg-emerald-100 p-3">
                    <h3 className="font-medium text-emerald-800 text-center mb-1">Regime Adaptation</h3>
                    <p className="text-xs text-emerald-700 text-center">
                      Automatically detects and adapts to changing market conditions
                    </p>
                  </Card>
                  <Card className="bg-emerald-100 p-3">
                    <h3 className="font-medium text-emerald-800 text-center mb-1">Risk Management</h3>
                    <p className="text-xs text-emerald-700 text-center">
                      Dynamic position sizing and stop-loss levels based on volatility
                    </p>
                  </Card>
                  <Card className="bg-emerald-100 p-3">
                    <h3 className="font-medium text-emerald-800 text-center mb-1">Multi-Source Data</h3>
                    <p className="text-xs text-emerald-700 text-center">
                      Incorporates on-chain data for deeper market insights
                    </p>
                  </Card>
                  <Card className="bg-emerald-100 p-3">
                    <h3 className="font-medium text-emerald-800 text-center mb-1">Self-Learning</h3>
                    <p className="text-xs text-emerald-700 text-center">
                      Continuous improvement through performance feedback
                    </p>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-emerald-200"></div>
              </div>
            </div>

            {/* Competitive Edge */}
            <div className="flex flex-col">
              <Card className="bg-indigo-50 border-indigo-200 p-4">
                <h2 className="text-xl font-semibold text-indigo-700 text-center mb-4">Competitive Edge</h2>
                <div className="grid grid-cols-2 gap-3">
                  <Card className="bg-indigo-100 p-3">
                    <h3 className="font-medium text-indigo-800 text-center mb-2">vs. Traditional Strategies</h3>
                    <ul className="text-xs text-indigo-700 list-disc pl-4 space-y-1">
                      <li>Adapts to changing market conditions automatically</li>
                      <li>Incorporates on-chain data traditional strategies ignore</li>
                      <li>Uses advanced ML techniques beyond simple indicators</li>
                      <li>Provides explainable decisions rather than black-box rules</li>
                    </ul>
                  </Card>
                  <Card className="bg-indigo-100 p-3">
                    <h3 className="font-medium text-indigo-800 text-center mb-2">vs. Other ML Strategies</h3>
                    <ul className="text-xs text-indigo-700 list-disc pl-4 space-y-1">
                      <li>Multi-model approach vs single model dependency</li>
                      <li>Dynamic ensemble weighting vs static predictions</li>
                      <li>Regime-specific risk management vs fixed parameters</li>
                      <li>Transparent decision-making vs black-box predictions</li>
                    </ul>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-indigo-200"></div>
              </div>
            </div>

            {/* Business Applications */}
            <div className="flex flex-col">
              <Card className="bg-cyan-50 border-cyan-200 p-4">
                <h2 className="text-xl font-semibold text-cyan-700 text-center mb-4">Business Applications</h2>
                <div className="grid grid-cols-3 gap-3">
                  <Card className="bg-cyan-100 p-3">
                    <h3 className="font-medium text-cyan-800 text-center mb-1">Institutional Trading</h3>
                    <ul className="text-xs text-cyan-700 list-disc pl-4 space-y-1">
                      <li>Compliant trading with explainable decisions</li>
                      <li>Risk-controlled crypto exposure</li>
                      <li>Customizable risk parameters</li>
                    </ul>
                  </Card>
                  <Card className="bg-cyan-100 p-3">
                    <h3 className="font-medium text-cyan-800 text-center mb-1">Fund Integration</h3>
                    <ul className="text-xs text-cyan-700 list-disc pl-4 space-y-1">
                      <li>Diversification for crypto portfolios</li>
                      <li>Systematic trading strategy</li>
                      <li>Reduced correlation to market beta</li>
                    </ul>
                  </Card>
                  <Card className="bg-cyan-100 p-3">
                    <h3 className="font-medium text-cyan-800 text-center mb-1">Technology Licensing</h3>
                    <ul className="text-xs text-cyan-700 list-disc pl-4 space-y-1">
                      <li>White-label trading technology</li>
                      <li>API access to predictions</li>
                      <li>Custom implementation services</li>
                    </ul>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="market" className="mt-4">
          <div className="max-w-4xl w-full flex flex-col gap-4">
            {/* Market Challenges */}
            <div className="flex flex-col">
              <Card className="bg-violet-50 border-violet-200 p-4">
                <h2 className="text-xl font-semibold text-violet-700 text-center mb-4">
                  Market Challenges & Solutions
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <Card className="bg-violet-100 p-3">
                    <h3 className="font-medium text-violet-800 text-center mb-2">Crypto Market Challenges</h3>
                    <div className="space-y-2">
                      <div className="bg-violet-200 p-2 rounded-lg">
                        <p className="text-sm font-medium text-violet-800">Extreme Volatility</p>
                        <p className="text-xs text-violet-700 mt-1">
                          Crypto markets experience volatility 5-10x traditional markets
                        </p>
                      </div>
                      <div className="bg-violet-200 p-2 rounded-lg">
                        <p className="text-sm font-medium text-violet-800">Rapid Regime Shifts</p>
                        <p className="text-xs text-violet-700 mt-1">
                          Market conditions can change dramatically in short timeframes
                        </p>
                      </div>
                      <div className="bg-violet-200 p-2 rounded-lg">
                        <p className="text-sm font-medium text-violet-800">Complex Market Dynamics</p>
                        <p className="text-xs text-violet-700 mt-1">
                          On-chain activity, exchange flows, and sentiment all impact price
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-violet-100 p-3">
                    <h3 className="font-medium text-violet-800 text-center mb-2">Our Technological Solutions</h3>
                    <div className="space-y-2">
                      <div className="bg-violet-200 p-2 rounded-lg">
                        <p className="text-sm font-medium text-violet-800">Adaptive Risk Management</p>
                        <p className="text-xs text-violet-700 mt-1">
                          Dynamic position sizing and stop-losses based on volatility
                        </p>
                      </div>
                      <div className="bg-violet-200 p-2 rounded-lg">
                        <p className="text-sm font-medium text-violet-800">Regime Detection System</p>
                        <p className="text-xs text-violet-700 mt-1">
                          HMM and clustering algorithms identify market states
                        </p>
                      </div>
                      <div className="bg-violet-200 p-2 rounded-lg">
                        <p className="text-sm font-medium text-violet-800">Multi-Source Data Integration</p>
                        <p className="text-xs text-violet-700 mt-1">
                          Combines price, on-chain, and sentiment data for holistic view
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-violet-200"></div>
              </div>
            </div>

            {/* Market Positioning */}
            <div className="flex flex-col">
              <Card className="bg-rose-50 border-rose-200 p-4">
                <h2 className="text-xl font-semibold text-rose-700 text-center mb-4">Market Positioning</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-rose-200">
                        <th className="p-2 text-left text-rose-800">Strategy Type</th>
                        <th className="p-2 text-center text-rose-800">Adaptability</th>
                        <th className="p-2 text-center text-rose-800">Data Sources</th>
                        <th className="p-2 text-center text-rose-800">Explainability</th>
                        <th className="p-2 text-center text-rose-800">Risk Management</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-rose-100 bg-rose-50">
                        <td className="p-2 text-left font-medium text-rose-800">Hybrid ML Strategy</td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          <span className="ml-1">High</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          <span className="ml-1">Multiple</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          <span className="ml-1">High</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          <span className="ml-1">Dynamic</span>
                        </td>
                      </tr>
                      <tr className="border-b border-rose-100">
                        <td className="p-2 text-left font-medium text-rose-800">Traditional TA</td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                          <span className="ml-1">Low</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                          <span className="ml-1">Price Only</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          <span className="ml-1">High</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-amber-500 rounded-full"></span>
                          <span className="ml-1">Static</span>
                        </td>
                      </tr>
                      <tr className="border-b border-rose-100">
                        <td className="p-2 text-left font-medium text-rose-800">Single ML Model</td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-amber-500 rounded-full"></span>
                          <span className="ml-1">Medium</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-amber-500 rounded-full"></span>
                          <span className="ml-1">Limited</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                          <span className="ml-1">Low</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-amber-500 rounded-full"></span>
                          <span className="ml-1">Semi-Dynamic</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 text-left font-medium text-rose-800">Statistical Arb</td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-amber-500 rounded-full"></span>
                          <span className="ml-1">Medium</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-amber-500 rounded-full"></span>
                          <span className="ml-1">Price-Based</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-amber-500 rounded-full"></span>
                          <span className="ml-1">Medium</span>
                        </td>
                        <td className="p-2 text-center text-rose-700">
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          <span className="ml-1">Statistical</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-rose-200"></div>
              </div>
            </div>

            {/* Market Trends */}
            <div className="flex flex-col">
              <Card className="bg-teal-50 border-teal-200 p-4">
                <h2 className="text-xl font-semibold text-teal-700 text-center mb-4">Market Trends & Alignment</h2>
                <div className="grid grid-cols-3 gap-3">
                  <Card className="bg-teal-100 p-3">
                    <h3 className="font-medium text-teal-800 text-center mb-1">Institutional Adoption</h3>
                    <p className="text-xs text-teal-700 mb-2">
                      Growing institutional interest in crypto trading with sophisticated strategies
                    </p>
                    <div className="bg-teal-200 p-2 rounded-lg">
                      <p className="text-xs font-medium text-teal-800">Our Alignment:</p>
                      <p className="text-xs text-teal-700 mt-1">
                        Explainable AI and risk controls meet institutional requirements
                      </p>
                    </div>
                  </Card>
                  <Card className="bg-teal-100 p-3">
                    <h3 className="font-medium text-teal-800 text-center mb-1">AI/ML Revolution</h3>
                    <p className="text-xs text-teal-700 mb-2">
                      Rapid advancement in AI/ML technologies applied to financial markets
                    </p>
                    <div className="bg-teal-200 p-2 rounded-lg">
                      <p className="text-xs font-medium text-teal-800">Our Alignment:</p>
                      <p className="text-xs text-teal-700 mt-1">
                        Cutting-edge hybrid ML architecture with continuous improvement
                      </p>
                    </div>
                  </Card>
                  <Card className="bg-teal-100 p-3">
                    <h3 className="font-medium text-teal-800 text-center mb-1">On-Chain Analytics</h3>
                    <p className="text-xs text-teal-700 mb-2">
                      Growing importance of blockchain data for market insights
                    </p>
                    <div className="bg-teal-200 p-2 rounded-lg">
                      <p className="text-xs font-medium text-teal-800">Our Alignment:</p>
                      <p className="text-xs text-teal-700 mt-1">
                        Deep integration of on-chain metrics into trading decisions
                      </p>
                    </div>
                  </Card>
                </div>
              </Card>
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-teal-200"></div>
              </div>
            </div>

            {/* Target Market */}
            <div className="flex flex-col">
              <Card className="bg-blue-50 border-blue-200 p-4">
                <h2 className="text-xl font-semibold text-blue-700 text-center mb-4">
                  Target Market & Growth Strategy
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center mb-1">Target Clients</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-blue-200 text-xs p-2 rounded">
                        <p className="font-medium text-center">Crypto Hedge Funds</p>
                        <p className="text-center mt-1">Seeking alpha generation</p>
                      </div>
                      <div className="bg-blue-200 text-xs p-2 rounded">
                        <p className="font-medium text-center">Family Offices</p>
                        <p className="text-center mt-1">Diversification into crypto</p>
                      </div>
                      <div className="bg-blue-200 text-xs p-2 rounded">
                        <p className="font-medium text-center">Prop Trading Firms</p>
                        <p className="text-center mt-1">Systematic strategies</p>
                      </div>
                      <div className="bg-blue-200 text-xs p-2 rounded">
                        <p className="font-medium text-center">FinTech Companies</p>
                        <p className="text-center mt-1">Technology integration</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-blue-100 p-3">
                    <h3 className="font-medium text-blue-800 text-center mb-1">Growth Strategy</h3>
                    <ul className="text-xs text-blue-700 list-disc pl-4 space-y-2 mt-2">
                      <li>
                        <span className="font-medium">Phase 1:</span> Develop and backtest strategy across multiple
                        market regimes
                      </li>
                      <li>
                        <span className="font-medium">Phase 2:</span> Deploy with limited capital to establish live
                        track record
                      </li>
                      <li>
                        <span className="font-medium">Phase 3:</span> Partner with select institutional clients for
                        managed accounts
                      </li>
                      <li>
                        <span className="font-medium">Phase 4:</span> Develop technology licensing model for broader
                        market access
                      </li>
                      <li>
                        <span className="font-medium">Phase 5:</span> Expand to additional crypto assets and market
                        segments
                      </li>
                    </ul>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

