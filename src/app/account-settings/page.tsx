import { Button } from "@/components/ui/button";

export default function AccountSettings() {
  return (
    <>
      <section className="p-8">
        <h1 className="text-3xl font-medium text-zinc-900">
          Settings
        </h1>
        <div className="flex flex-col mt-6 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between items-center pb-5 border-b border-zinc-500">
            <div className="space-y-1">
              <h2 className="text-lg font-medium text-zinc-900">
                Personal info
              </h2>
              <span className="text-sm text-zinc-500">
                Update your photo and personal details here.
              </span>
            </div>

            <div className="flex item-center gap-2">
              <Button>
                Cancel
              </Button>
              <Button>
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
