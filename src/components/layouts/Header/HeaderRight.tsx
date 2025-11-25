import UiButton from "@/components/ui/UiButton";

export default function HeaderRight() {
  return (
    <div className="flex w-full flex-1 items-center justify-end gap-3 text-sm md:w-auto">
      <UiButton variant="ghost" size="sm" color="neutral">
        Newsletter
      </UiButton>
      <UiButton size="sm">Agenda una demo</UiButton>
    </div>
  );
}
