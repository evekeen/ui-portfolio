import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Palette, Type, Layout, BarChart3, RotateCcw } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const StyleControlPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('presets');
  const { currentTheme, updateTheme, resetTheme, presetConfigs, applyPreset } = useTheme();

  const tabs = [
    { id: 'presets', label: 'Presets', icon: Layout },
    { id: 'colors', label: 'Colors', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'components', label: 'Components', icon: BarChart3 },
  ];

  const colorThemes = [
    { id: 'light', name: 'Light', colors: { background: '#ffffff', text: '#1f2937' } },
    { id: 'dark', name: 'Dark', colors: { background: '#111827', text: '#f9fafb' } },
    { id: 'high-contrast', name: 'High Contrast', colors: { background: '#000000', text: '#ffffff' } },
  ];

  const buttonStyles = [
    { id: 'flat', name: 'Flat' },
    { id: 'raised', name: 'Raised' },
    { id: 'outlined', name: 'Outlined' },
    { id: 'glass', name: 'Glass' },
  ];

  const cardLayouts = [
    { id: 'compact', name: 'Compact' },
    { id: 'spacious', name: 'Spacious' },
    { id: 'grid', name: 'Grid' },
    { id: 'list', name: 'List' },
  ];

  const dataDisplays = [
    { id: 'numeric', name: 'Numeric' },
    { id: 'graph', name: 'Graph' },
    { id: 'gauge', name: 'Gauge' },
    { id: 'progress', name: 'Progress' },
  ];

  const typographyScales = [
    { id: 'compact', name: 'Compact' },
    { id: 'standard', name: 'Standard' },
    { id: 'large', name: 'Large' },
    { id: 'extra-large', name: 'Extra Large' },
  ];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300"
      >
        <Settings className="w-6 h-6 text-gray-700" />
      </motion.button>

      {/* Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Style Controls</h3>
                <button
                  onClick={resetTheme}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Reset to Default"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Preset Configurations */}
              {activeTab === 'presets' && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Quick Presets</h4>
                  {Object.entries(presetConfigs).map(([id, preset]) => (
                    <button
                      key={id}
                      onClick={() => applyPreset(id)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        currentTheme.id === id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{preset.name}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {id === 'factory-floor' && 'High contrast, large UI for factory environments'}
                        {id === 'control-room' && 'Balanced design for control room operators'}
                        {id === 'mobile-inspection' && 'Touch-optimized for mobile devices'}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Colors */}
              {activeTab === 'colors' && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Color Themes</h4>
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => updateTheme({ colors: { ...currentTheme.colors, ...theme.colors } })}
                      className="w-full p-3 text-left rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div
                            className="w-4 h-4 rounded-full border"
                            style={{ backgroundColor: theme.colors.background }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border"
                            style={{ backgroundColor: theme.colors.text }}
                          />
                        </div>
                        <span className="font-medium">{theme.name}</span>
                      </div>
                    </button>
                  ))}

                  <div className="pt-4 border-t">
                    <h5 className="font-medium text-gray-900 mb-3">Custom Colors</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {['primary', 'accent', 'error', 'warning'].map((colorKey) => (
                        <div key={colorKey}>
                          <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                            {colorKey}
                          </label>
                          <input
                            type="color"
                            value={currentTheme.colors[colorKey as keyof typeof currentTheme.colors]}
                            onChange={(e) => updateTheme({
                              colors: { ...currentTheme.colors, [colorKey]: e.target.value }
                            })}
                            className="w-full h-10 rounded border border-gray-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Typography */}
              {activeTab === 'typography' && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Typography Scale</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {typographyScales.map((scale) => (
                      <button
                        key={scale.id}
                        onClick={() => updateTheme({
                          typography: { ...currentTheme.typography, scale: scale.id as any }
                        })}
                        className={`p-3 text-center rounded-lg border transition-all ${
                          currentTheme.typography.scale === scale.id
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-sm">{scale.name}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <h5 className="font-medium text-gray-900 mb-3">Font Family</h5>
                    <select
                      value={currentTheme.typography.fontFamily}
                      onChange={(e) => updateTheme({
                        typography: { ...currentTheme.typography, fontFamily: e.target.value }
                      })}
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="Inter">Inter</option>
                      <option value="JetBrains Mono">JetBrains Mono</option>
                      <option value="system-ui">System UI</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Components */}
              {activeTab === 'components' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Button Style</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {buttonStyles.map((style) => (
                        <button
                          key={style.id}
                          onClick={() => updateTheme({
                            components: { ...currentTheme.components, buttonStyle: style.id as any }
                          })}
                          className={`p-2 text-center rounded border transition-all ${
                            currentTheme.components.buttonStyle === style.id
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {style.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Card Layout</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cardLayouts.map((layout) => (
                        <button
                          key={layout.id}
                          onClick={() => updateTheme({
                            components: { ...currentTheme.components, cardLayout: layout.id as any }
                          })}
                          className={`p-2 text-center rounded border transition-all ${
                            currentTheme.components.cardLayout === layout.id
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {layout.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Data Display</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {dataDisplays.map((display) => (
                        <button
                          key={display.id}
                          onClick={() => updateTheme({
                            components: { ...currentTheme.components, dataDisplay: display.id as any }
                          })}
                          className={`p-2 text-center rounded border transition-all ${
                            currentTheme.components.dataDisplay === display.id
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {display.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-20 z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
};