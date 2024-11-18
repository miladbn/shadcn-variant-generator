'use client'

import { useState } from 'react'

interface VariantGeneratorProps {
  component: string
  defaultVariants?: Record<string, string>
}

const SHADCN_COMPONENTS = [
  'Accordion',
  'Alert',
  'AlertDialog',
  'AspectRatio',
  'Avatar',
  'Badge',
  'Button',
  'Calendar',
  'Card',
  'Checkbox',
  'Collapsible',
  'Command',
  'ContextMenu',
  'Dialog',
  'DropdownMenu',
  'Form',
  'HoverCard',
  'Input',
  'Label',
  'Menubar',
  'NavigationMenu',
  'Popover',
  'Progress',
  'RadioGroup',
  'ScrollArea',
  'Select',
  'Separator',
  'Sheet',
  'Skeleton',
  'Slider',
  'Switch',
  'Table',
  'Tabs',
  'Textarea',
  'Toast',
  'Toggle',
  'Tooltip',
]

export function VariantGenerator({ component: initialComponent, defaultVariants }: VariantGeneratorProps) {
  const [component, setComponent] = useState(initialComponent)
  const [variants, setVariants] = useState<Record<string, string>>(defaultVariants || {})
  const [currentVariant, setCurrentVariant] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  const handleAddVariant = () => {
    if (currentVariant && currentValue) {
      setVariants(prev => ({
        ...prev,
        [currentVariant]: currentValue
      }))
      setCurrentVariant('')
      setCurrentValue('')
    }
  }

  const generateVariantCode = () => {
    const variantEntries = Object.entries(variants)
    if (variantEntries.length === 0) return ''

    return `// Add this to your ${component.toLowerCase()}.tsx variants
variants: {
  ${variantEntries.map(([variant, value]) => `${variant}: {
    default: "${value}",
  }`).join(',\n  ')}
},

// Example usage:
<${component} ${variantEntries.map(([variant]) => `${variant}="default"`).join(' ')} />
`
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium">
          Select Component
          <select
            value={component}
            onChange={(e) => setComponent(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {SHADCN_COMPONENTS.map((comp) => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Variant name (e.g., size)"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
              value={currentVariant}
              onChange={(e) => setCurrentVariant(e.target.value)}
            />
            <input
              type="text"
              placeholder="Value (e.g., sm)"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
            />
            <button
              onClick={handleAddVariant}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Variants</h3>
        <div className="space-y-2">
          {Object.entries(variants).map(([variant, value]) => (
            <div
              key={variant}
              className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-4 py-2"
            >
              <span className="font-mono text-sm">
                {variant}: {value}
              </span>
              <button
                onClick={() => {
                  const newVariants = { ...variants }
                  delete newVariants[variant]
                  setVariants(newVariants)
                }}
                className="text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          {Object.keys(variants).length === 0 && (
            <p className="text-sm text-gray-500">No variants added yet</p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Generated Code</h3>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4">
          <code className="text-sm text-gray-100">
            {generateVariantCode() || '// Add variants to see the generated code'}
          </code>
        </pre>
      </div>
    </div>
  )
}
