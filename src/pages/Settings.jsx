import UpdateSettingsForm from "@/features/settings/UpdateSettingsForm";
import { useSettings } from "@/features/settings/useSettings";
import Heading from "@/ui/Heading";
import Spinner from "@/ui/Spinner";

function Settings() {
  const { settings, isLoading } = useSettings();

  return (
    <>
      <Heading>參數設定</Heading>
      <div className="w-full">
        {isLoading ? <Spinner /> : <UpdateSettingsForm settings={settings} />}
      </div>
    </>
  );
}

export default Settings;
