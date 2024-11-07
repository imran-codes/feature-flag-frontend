// A custom hook for feature flagging

import axios from "axios";
import { useEffect, useState } from "react";
import { FeatureFlag } from "../types";

const useFeatureFlags = () => {
  const [flags, setFlags] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatureFlags = async () => {
      try {
        const { data } = await axios.get(
          "https://your-api.com/api/feature-flags"
        );
        const flagsObj = data.reduce(
          (acc: { [key: string]: boolean }, flag: FeatureFlag) => {
            acc[flag.featureName] = flag.enabled;
            return acc;
          },
          {}
        );
        setFlags(flagsObj);
      } catch (err) {
        console.error("Error fetching feature flags:", err);
        setError("Failed to fetch feature flags. Please try again later.");
      }
    };
    fetchFeatureFlags();
  }, []);

  return { flags, error };
};

export default useFeatureFlags;
