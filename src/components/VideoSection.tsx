import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Video,
  BadgeCheck,
  Quote,
  Shield,
  Upload,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Languages,
} from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/nurseryData';

interface Chapter {
  time: number;
  label: string;
  telugu: string;
}

interface Caption {
  start: number;
  end: number;
  speaker: string;
  telugu: string;
  english: string;
}

const CHAPTERS: Chapter[] = [
  {
    time: 0,
    label: 'Meera Hussain Intro',
    telugu: 'మీరా హుస్సేన్ పరిచయం',
  },
  {
    time: 28,
    label: 'Farmers from Durgi Mandal',
    telugu: 'రైతుల అనుభవం',
  },
  {
    time: 46,
    label: '8 Quintals + 40-45 Q/Acre Yield',
    telugu: 'దిగుబడి అంచనా',
  },
  {
    time: 54,
    label: '3-Step Continuous Fruiting',
    telugu: '3 స్టెప్పుల కాపు',
  },
  {
    time: 82,
    label: '95% Disease & Weather Resilience',
    telugu: 'తెగుళ్ల తట్టుకునే శక్తి',
  },
  {
    time: 100,
    label: '4 Key Variety Rules',
    telugu: '4 ముఖ్యమైన విషయాలు',
  },
  {
    time: 120,
    label: 'Cold Storage & Top Market Rate',
    telugu: 'టాప్ మార్కెట్ రేటు',
  },
];

const CAPTIONS: Caption[] = [
  {
    start: 0,
    end: 12,
    speaker: 'Meera Hussain (Sakata Senior Area Manager)',
    telugu:
      'నమస్కారం రైతు సోదరులారా. నా పేరు మీరా హుస్సేన్. సకాటా కంపెనీ లో సీనియర్ ఏరియా మేనేజర్ గా పనిచేస్తున్నాను.',
    english:
      'Greetings farmer brothers. My name is Meera Hussain, Senior Area Manager at Sakata Seeds.',
  },
  {
    start: 12,
    end: 27,
    speaker: 'Meera Hussain',
    telugu:
      'ఈరోజు మనం పల్నాడు జిల్లా, వెల్దుర్తి మండలం, రచ్చమల్లపాడు విలేజ్ లో ఉన్నాము. ఇక్కడ సకాటా రాయ 2282 మిరప తోటను పరిశీలించడానికి వచ్చాము.',
    english:
      'Today we are in Rachamallapadu village, Veldurthi Mandal, Palnadu District, inspecting this thriving Sakata Raya 2282 chilli crop.',
  },
  {
    start: 28,
    end: 45,
    speaker: 'Farmer / Area Visitors',
    telugu:
      'దుర్గి మండలం మరియు అచ్చంపేట పరిసర ప్రాంతాల నుంచి రైతులు తోటను స్వయంగా చూడటానికి వచ్చారు. ఈ రకం కాపు చూసి అందరూ ఎంతో సంతోషిస్తున్నారు.',
    english:
      'Farmers from Durgi mandal and surrounding areas came in person to see this field and were impressed with the crop load.',
  },
  {
    start: 46,
    end: 54,
    speaker: 'Meera Hussain',
    telugu:
      'ఇప్పటికే 8 క్వింటాళ్ల కాయలు కోసి అమ్మడం జరిగింది. ఈ తోట నుంచి ఎకరాకి 40 నుంచి 45 క్వింటాల వరకు దిగుబడి వచ్చే అవకాశం స్పష్టంగా కనిపిస్తోంది.',
    english:
      'Already 8 quintals of chillies have been harvested and marketed. The total expected yield is 40 to 45 quintals per acre.',
  },
  {
    start: 54,
    end: 81,
    speaker: 'Meera Hussain',
    telugu:
      'ఈ సకాటా 2282 లో ప్రత్యేకత ఏంటంటే – 3 స్టెప్పుల కాపు! కింద నుంచి పైదాకా ఒకటే సైజు కాయ, మంచి లావు, సమానమైన పొడవు కలిగి ఉంటుంది.',
    english:
      'The special trait of Sakata 2282 is 3-step continuous fruiting! Uniform fruit size, ideal thickness and length from bottom branch to top.',
  },
  {
    start: 82,
    end: 100,
    speaker: 'Meera Hussain',
    telugu:
      'ఇటీవల కురిసిన వర్షాల్లో కూడా ఈ తోట ఏమాత్రం దెబ్బతినలేదు. తెగుళ్ల పరంగా 95% వరకు తట్టుకునే అద్భుతమైన రోగనిరోధక శక్తి ఉంది.',
    english:
      'Even through recent heavy unseasonal rains, this field remained undamaged. It offers 95% disease and virus tolerance.',
  },
  {
    start: 100,
    end: 119,
    speaker: 'Meera Hussain',
    telugu:
      'సకాటా రాయ 2282 లో రైతులు గుర్తుంచుకోవలసిన 4 ముఖ్య విషయాలు: అధిక దిగుబడి, 3-4 కోతల్లోనూ సైజు తగ్గకపోవడం, అద్భుతమైన ఎరుపు రంగు మరియు నాణ్యత!',
    english:
      '4 Golden points of Sakata Raya 2282: High total yield, no fruit size drop even in 3rd & 4th pickings, extraordinary red color, and unmatched quality.',
  },
  {
    start: 120,
    end: 133,
    speaker: 'Meera Hussain',
    telugu:
      'ఈ కాయలు కోల్డ్ స్టోరేజ్ (AC) లో పెడితే రంగు మారకుండా దీర్ఘకాలం నిల్వ ఉంటాయి. మార్కెట్ లో 100% టాప్ రేట్ పడే రకం ఇది!',
    english:
      'These chillies maintain color in cold storage (AC) for long durations, ensuring farmers receive 100% top market price!',
  },
];

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(133); // 2:13 total duration
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [languageMode, setLanguageMode] = useState<'bilingual' | 'telugu' | 'english'>('bilingual');
  const [activeTab, setActiveTab] = useState<'player' | 'transcript' | 'summary'>('player');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Fallback timer simulation when no physical MP4 file is attached
  useEffect(() => {
    if (isPlaying && !videoSrc) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (!isPlaying && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, videoSrc, duration]);

  const togglePlay = () => {
    if (videoSrc && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    if (videoSrc && videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setVideoSrc(objectUrl);
      setIsPlaying(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }, 200);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Find active caption
  const currentCaption = CAPTIONS.find(
    (c) => currentTime >= c.start && currentTime <= c.end
  ) || CAPTIONS[0];

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="video" className="py-20 bg-stone-950 text-white relative overflow-hidden">
      {/* Hidden file input for farmer video replacement */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
            <Video className="w-4 h-4 text-emerald-400" />
            <span>AUTHENTIC FIELD INSPECTION VIDEO</span>
          </div>

          <h2
            id="video-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Sakata Field Inspection & Expert Message
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-300">
            Senior Area Manager <strong className="text-emerald-400">Meera Hussain Paladugu</strong> inspecting
            high-yielding <strong className="text-red-400">Sakata Raya 2282</strong> chilli crop with local farmers in Palnadu District.
          </p>

          {/* Quick Meta Badge Row */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Date: 09-03-2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Rachamallapadu, Veldurthi Mandal, Palnadu (AP)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Variety: Sakata Raya 2282 (రాయ 2282)</span>
            </span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-xl bg-stone-900 border border-stone-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('player')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'player'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Interactive Video Player
            </button>
            <button
              onClick={() => setActiveTab('transcript')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'transcript'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Telugu & English Transcript
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'summary'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Key Field Takeaways (4 Points)
            </button>
          </div>
        </div>

        {activeTab === 'player' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Video Player Column */}
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 border-2 border-emerald-800/60 shadow-2xl group">
                {/* 16:9 Video Presentation Frame */}
                <div className="relative aspect-video w-full bg-stone-950 flex items-center justify-center overflow-hidden">
                  {videoSrc ? (
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      poster={IMAGES.sakataManager}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleEnded}
                      playsInline
                      muted={isMuted}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* High-resolution authentic poster frame */
                    <div className="relative w-full h-full">
                      <img
                        src={IMAGES.sakataManager}
                        alt="Meera Hussain Sakata Senior Area Manager field inspection with farmers"
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isPlaying ? 'scale-105 filter brightness-95' : 'scale-100'
                        }`}
                      />
                      {/* Ambient gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
                    </div>
                  )}

                  {/* On-Screen Subtitle Banner */}
                  <div className="absolute bottom-16 sm:bottom-20 left-4 right-4 z-20 pointer-events-none">
                    <div className="max-w-2xl mx-auto bg-stone-950/90 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 sm:p-4 text-center shadow-2xl">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center justify-center gap-1.5">
                        <BadgeCheck className="w-3 h-3" />
                        <span>{currentCaption.speaker}</span>
                      </div>
                      {(languageMode === 'bilingual' || languageMode === 'telugu') && (
                        <p className="text-white text-xs sm:text-sm font-semibold leading-snug">
                          {currentCaption.telugu}
                        </p>
                      )}
                      {(languageMode === 'bilingual' || languageMode === 'english') && (
                        <p className="text-stone-300 text-[11px] sm:text-xs leading-normal mt-1 italic">
                          {currentCaption.english}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Play/Pause Center Overlay */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 bg-stone-950/40 hover:bg-stone-950/30 transition-colors flex flex-col items-center justify-center cursor-pointer p-6 z-20"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600/95 text-white flex items-center justify-center shadow-2xl pl-1 group-hover:scale-110 group-hover:bg-emerald-500 transition-all border-2 border-white/40">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                      </div>
                      <span className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-stone-900/90 px-4 py-1.5 rounded-full border border-stone-700 shadow-lg">
                        Play Sakata Field Video (09-03-2026)
                      </span>
                    </div>
                  )}

                  {/* Top Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Sakata Raya 2282 Field Inspection</span>
                    </div>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-1 bg-stone-900/90 backdrop-blur-md border border-white/20 rounded-lg p-1 text-[11px]">
                      <Languages className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                      <button
                        onClick={() => setLanguageMode('bilingual')}
                        className={`px-2 py-0.5 rounded ${
                          languageMode === 'bilingual'
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        Both
                      </button>
                      <button
                        onClick={() => setLanguageMode('telugu')}
                        className={`px-2 py-0.5 rounded ${
                          languageMode === 'telugu'
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        తెలుగు
                      </button>
                      <button
                        onClick={() => setLanguageMode('english')}
                        className={`px-2 py-0.5 rounded ${
                          languageMode === 'english'
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>

                  {/* Custom Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent flex flex-col gap-2 z-30">
                    {/* Scrubbing Bar */}
                    <div
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickPos = (e.clientX - rect.left) / rect.width;
                        handleSeek(clickPos * duration);
                      }}
                      className="w-full h-2 bg-stone-800 rounded-full overflow-hidden cursor-pointer relative"
                    >
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-100"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between text-xs text-stone-200">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={togglePlay}
                          className="p-1.5 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white fill-white" />
                          )}
                        </button>

                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-1.5 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-red-400" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-white" />
                          )}
                        </button>

                        {/* Timestamp Display */}
                        <span className="text-[11px] text-stone-300 font-mono">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>

                        <span className="text-[11px] text-emerald-400 font-medium hidden sm:inline">
                          Meera Hussain • Sakata Seeds
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Optional Load Video File button */}
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-[11px] border border-stone-700 transition-colors"
                          title="Load custom video file from device"
                        >
                          <Upload className="w-3 h-3 text-emerald-400" />
                          <span className="hidden sm:inline">Load Video File</span>
                        </button>

                        <button
                          onClick={() => handleSeek(0)}
                          className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                          title="Replay from start"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            if (videoRef.current) {
                              if (document.fullscreenElement) {
                                document.exitFullscreen();
                              } else {
                                videoRef.current.requestFullscreen();
                              }
                            }
                          }}
                          className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                          title="Fullscreen"
                        >
                          <Maximize className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chapter Scrubbing Bar */}
                <div className="p-3 bg-stone-900 border-t border-stone-800 overflow-x-auto scrollbar-none flex gap-2">
                  {CHAPTERS.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSeek(ch.time)}
                      className={`px-3 py-1.5 rounded-lg text-left whitespace-nowrap text-[11px] transition-all shrink-0 ${
                        currentTime >= ch.time &&
                        (idx === CHAPTERS.length - 1 || currentTime < CHAPTERS[idx + 1].time)
                          ? 'bg-emerald-600 text-white font-bold shadow'
                          : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-[10px] text-emerald-300 block">
                        {formatTime(ch.time)}
                      </span>
                      <span>{ch.telugu}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* Speaker Card */}
              <div className="bg-stone-900 border border-emerald-800/50 rounded-2xl p-6 shadow-xl relative">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/20">
                  <BadgeCheck className="w-4 h-4" />
                  <span>OFFICIAL SAKATA LEADER</span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight">
                  {BUSINESS_INFO.expertSpeaker.name}
                </h3>
                <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                  {BUSINESS_INFO.expertSpeaker.designation}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  తెలుగు: {BUSINESS_INFO.expertSpeaker.nameTelugu}
                </p>

                {/* Spoken Quote Box */}
                <div className="mt-5 pt-4 border-t border-stone-800 relative">
                  <Quote className="w-8 h-8 text-emerald-600/20 absolute -top-3 right-0" />
                  <p className="text-xs uppercase font-bold tracking-wider text-stone-400 mb-1.5">
                    Spoken Field Introduction:
                  </p>
                  <blockquote className="text-stone-200 text-xs sm:text-sm italic leading-relaxed bg-stone-950/70 p-3.5 rounded-xl border-l-4 border-emerald-500">
                    “{BUSINESS_INFO.expertSpeaker.introText}”
                  </blockquote>
                  <p className="text-stone-400 text-xs mt-2 italic">
                    “{BUSINESS_INFO.expertSpeaker.introTextEnglish}”
                  </p>
                </div>

                {/* Field Location Summary */}
                <div className="mt-5 text-xs text-stone-300 flex items-start gap-2 bg-stone-950/50 p-3 rounded-lg border border-stone-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Field Location:</strong> Rachamallapadu Village, Veldurthi Mandal, Palnadu District, AP. Attended by farmers from Durgi, Atchampeta, and surrounding mandals.
                  </span>
                </div>
              </div>

              {/* Verified Yield & Performance Stats Card */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 shadow-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Field Verified Metrics (Sakata Raya 2282)</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
                    <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                      Already Harvested
                    </span>
                    <span className="text-lg font-black text-emerald-400">8 Quintals</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Sold to market</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
                    <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                      Expected Yield
                    </span>
                    <span className="text-lg font-black text-white">40 - 45 Q/Acre</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">High production</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
                    <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                      Fruiting Pattern
                    </span>
                    <span className="text-sm font-bold text-white">3-Step Clusters</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Bottom to top</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
                    <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                      Disease Tolerance
                    </span>
                    <span className="text-sm font-bold text-emerald-400">95% Resistance</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Heavy rain survival</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Full Bilingual Transcript */}
        {activeTab === 'transcript' && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-800 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Field Inspection Transcript (సంభాషణ వివరాలు)
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Recorded on 09-03-2026 at Rachamallapadu Village, Veldurthi Mandal, Palnadu District
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguageMode('bilingual')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    languageMode === 'bilingual' ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  Bilingual
                </button>
                <button
                  onClick={() => setLanguageMode('telugu')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    languageMode === 'telugu' ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  తెలుగు మాత్రమే
                </button>
                <button
                  onClick={() => setLanguageMode('english')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    languageMode === 'english' ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  English Only
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {CAPTIONS.map((cap, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    handleSeek(cap.start);
                    setActiveTab('player');
                    setIsPlaying(true);
                  }}
                  className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 hover:border-emerald-600/50 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      {cap.speaker}
                    </span>
                    <span className="font-mono text-stone-400 group-hover:text-emerald-300 flex items-center gap-1">
                      {formatTime(cap.start)} - {formatTime(cap.end)}
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                  {(languageMode === 'bilingual' || languageMode === 'telugu') && (
                    <p className="text-white text-sm leading-relaxed font-medium">
                      {cap.telugu}
                    </p>
                  )}

                  {(languageMode === 'bilingual' || languageMode === 'english') && (
                    <p className="text-stone-300 text-xs leading-normal mt-1.5 italic">
                      {cap.english}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Key Takeaways (4 Points) */}
        {activeTab === 'summary' && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/50">
                Sakata Agriculture Advisory
              </span>
              <h3 className="text-2xl font-black text-white mt-2">
                4 Golden Highlights of Sakata Raya 2282
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Essential takeaways stated by Senior Area Manager Meera Hussain for chilli farmers in Andhra Pradesh and Telangana.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-black text-lg border border-emerald-700/40 shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Supreme Yield (అధిక దిగుబడి)
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Proven field yield reaching 40 to 45 quintals per acre with consistent harvest cycles.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-black text-lg border border-emerald-700/40 shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    No Size Drop (సైజు తగ్గని కాయ)
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Maintains uniform fruit thickness and length from bottom branch to top branch, even in 3rd and 4th pickings.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-black text-lg border border-emerald-700/40 shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Extraordinary Color & Quality (ఎరుపు రంగు)
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Glossy deep red color and strong skin that withstands rain, adverse weather, and pests with 95% tolerance.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-black text-lg border border-emerald-700/40 shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Cold Storage & Top Market Rate (AC నిల్వ)
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Excellent longevity in AC cold storage without discoloration or softening, guaranteeing top market selling price.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5 text-xs text-stone-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Order authentic <strong>Sakata Raya 2282</strong> seedlings grown in pro-trays directly from Rythu Mithra Nursery.
                </span>
              </div>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
              >
                Call Nursery: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
