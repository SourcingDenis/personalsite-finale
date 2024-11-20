import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: 'light',
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <button
      data-cal-link="sourcingdenis/15min"
      style={{
        padding: '10px 20px',
        backgroundColor: '#000000',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Schedule a Meeting
    </button>
  );
} 