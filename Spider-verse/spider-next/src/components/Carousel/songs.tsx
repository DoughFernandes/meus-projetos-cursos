import { useMemo, useEffect } from "react";

const useAudioResources = (visibleItems: any , enPosition: any) => {
  const voicesAudio: Record<string, HTMLAudioElement> = useMemo(() => ({
    "spider-man-616": new Audio('/public/songs/spider-man-616.mp3'),
    "spider-woman-65": new Audio('/public/songs/mulher-aranha-65.mp3'),
    "spider-man-1610": new Audio('/public/songs/spider-man-1610.mp3'),
    "sp-dr-14512": new Audio('/public/songs/sp-dr-14512.mp3'),
    "spider-ham-8311": new Audio('/public/songs/spider-man-8311.mp3'),
    "spider-man-90214": new Audio('/public/songs/spider-man-90214.mp3'),
    "spider-man-928": new Audio('/public/songs/spider-man-928.mp3')
  }), []);

  const transitionAudios = useMemo(() => new Audio('@public/songs/transition.mp3'), []);

  useEffect(() => {
    if (!visibleItems) return;
    transitionAudios.play();

    const voiceAudio = voicesAudio[visibleItems[enPosition.MIDDLE].id];

    if (!voiceAudio) return;

    voiceAudio.volume = 1;
    voiceAudio.play();

  }, [visibleItems, transitionAudios, voicesAudio]);

  return { voicesAudio, transitionAudios };
};

export default useAudioResources;
