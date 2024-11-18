import Image from "next/image";
import { Header } from '@/components/header'
import { VariantGenerator } from '@/components/variant-generator'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-screen-xl mx-auto py-8">
        <div className="grid gap-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Variant Generator</h1>
            <p className="text-muted-foreground">
              Generate custom variants for your shadcn/ui components.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Component Settings</h2>
                <p className="text-sm text-muted-foreground">
                  Choose a component and customize its variants.
                </p>
              </div>
              <VariantGenerator 
                component="Button"
                defaultVariants={{
                  size: "default",
                  variant: "default"
                }}
              />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Preview</h2>
                <p className="text-sm text-muted-foreground">
                  See your component variants in action.
                </p>
              </div>
              <div className="border rounded-lg p-4 min-h-[200px]">
                {/* Preview will be added here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
