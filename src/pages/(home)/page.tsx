/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HeartHandshake,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Mouse,
  Phone,
  Ticket,
  User,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaRegImages, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { GrFormPrevious } from 'react-icons/gr'
import { HiOutlineTicket } from 'react-icons/hi2'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { MdNavigateNext, MdOutlineEmojiEvents } from 'react-icons/md'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { photos } from '../../@config/utils/galery-photos'
import { Game, nextGamesList } from '../../@config/utils/next-games-list'
import { Footer } from '../../components/footer'
import { Reveal } from '../../components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'
import { Button } from '../../components/ui/button'
import { FocusCardsSlug } from '../../components/ui/focus-card'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '../../components/ui/sheet'

export function HomePage() {
  const refNextGames: any = useRef(null)
  const refFAQ: any = useRef(null)
  const refGalery: any = useRef(null)
  const refEvent: any = useRef(null)

  const { hash } = useLocation()

  const [hasActiveDesktopHeader, setHasActiveDesktopHeader] = useState(false)
  const [hasActiveLoaderInitial, setHasActiveLoaderInitial] = useState(false)
  const navigate = useNavigate()

  const handleScrollClick = () => {
    window.scroll({
      top: 250,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setHasActiveLoaderInitial(false)
    }, 3000)

    window.addEventListener('scroll', () => {
      if (window.scrollY <= 50) {
        if (window.innerWidth >= 1024) {
          setHasActiveDesktopHeader(true)
        }
      } else {
        setHasActiveDesktopHeader(false)
      }
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setHasActiveDesktopHeader(false)
      } else {
        setHasActiveDesktopHeader(true)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!hash) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      })
    }

    if (hash === '#proximos-jogos') {
      window.scroll({
        top: refNextGames.current.offsetTop - 50,
        behavior: 'smooth',
      })
    }

    if (hash === '#perguntas-frequentes') {
      window.scroll({
        top: refFAQ.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#galeria') {
      window.scroll({
        top: refGalery.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#faca-seu-evento') {
      window.scroll({
        top: refEvent.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }, [hash])

  const gamesGroupedByMonth = nextGamesList.reduce(
    (acc, game) => {
      const [, , date] = game.date.split(' ')
      const [, month, year] = date.split('/')
      const key = `${month}/${year}`

      if (!acc[key]) acc[key] = []
      acc[key].push(game)

      return acc
    },
    {} as Record<string, Game[]>,
  )

  const sortedKeys = Object.keys(gamesGroupedByMonth).sort((a, b) => {
    const [monthA, yearA] = a.split('/').map(Number)
    const [monthB, yearB] = b.split('/').map(Number)
    return yearA - yearB || monthA - monthB
  })

  return (
    <main>
      {/* Carregamento inicial */}
      <div
        className={cn(
          'fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-zinc-900 transition-all',
          hasActiveLoaderInitial
            ? 'visible opacity-100'
            : 'invisible opacity-0',
        )}
      >
        <svg
          width="303"
          id="svg"
          height="159"
          viewBox="0 0 303 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1_45_13"
            maskUnits="userSpaceOnUse"
            x="3"
            y="69"
            width="295"
            height="86"
            fill="black"
          >
            <rect fill="white" x="3" y="69" width="295" height="86" />
            <path d="M35.6974 70.4973L40.812 75.6118V108.073L37.4719 111.518L40.812 114.858V148.885L35.6974 154H4.90579V70.4973H35.6974ZM31.2092 79.3694H14.5086V107.03H31.2092V79.3694ZM14.5086 145.128H31.2092V115.902H14.5086V145.128ZM93.3641 154H83.2394L70.0877 118.198H63.3031V154H53.909V70.4973H84.3875L89.5021 75.6118V113.084L84.3875 118.198H79.4817L93.3641 154ZM63.3031 79.265V109.43H79.7949V79.265H63.3031ZM130.995 154L127.133 130.202H111.894L108.136 154H98.6376L113.981 70.4973H125.045L140.598 154H130.995ZM113.146 122.165H125.88L119.409 82.3964L113.146 122.165ZM177.743 70.4973H187.242V154H177.743V115.797H159.164V154H149.77V70.4973H159.164V107.03H177.743V70.4973ZM235.16 70.4973H244.763V154H235.368V93.878L222.634 128.114H222.53L209.796 93.878V154H200.402V70.4973H210.005L222.634 107.343L235.16 70.4973ZM286.356 154L282.494 130.202H267.254L263.497 154H253.998L269.342 70.4973H280.406L295.959 154H286.356ZM268.507 122.165H281.241L274.77 82.3964L268.507 122.165Z" />
          </mask>
          <path
            d="M35.6974 70.4973L40.812 75.6118V108.073L37.4719 111.518L40.812 114.858V148.885L35.6974 154H4.90579V70.4973H35.6974ZM31.2092 79.3694H14.5086V107.03H31.2092V79.3694ZM14.5086 145.128H31.2092V115.902H14.5086V145.128ZM93.3641 154H83.2394L70.0877 118.198H63.3031V154H53.909V70.4973H84.3875L89.5021 75.6118V113.084L84.3875 118.198H79.4817L93.3641 154ZM63.3031 79.265V109.43H79.7949V79.265H63.3031ZM130.995 154L127.133 130.202H111.894L108.136 154H98.6376L113.981 70.4973H125.045L140.598 154H130.995ZM113.146 122.165H125.88L119.409 82.3964L113.146 122.165ZM177.743 70.4973H187.242V154H177.743V115.797H159.164V154H149.77V70.4973H159.164V107.03H177.743V70.4973ZM235.16 70.4973H244.763V154H235.368V93.878L222.634 128.114H222.53L209.796 93.878V154H200.402V70.4973H210.005L222.634 107.343L235.16 70.4973ZM286.356 154L282.494 130.202H267.254L263.497 154H253.998L269.342 70.4973H280.406L295.959 154H286.356ZM268.507 122.165H281.241L274.77 82.3964L268.507 122.165Z"
            fill="white"
          />
          <path
            d="M35.6974 70.4973L36.4045 69.7902L36.1116 69.4973H35.6974V70.4973ZM40.812 75.6118H41.812V75.1976L41.5191 74.9047L40.812 75.6118ZM40.812 108.073L41.5299 108.77L41.812 108.479V108.073H40.812ZM37.4719 111.518L36.754 110.822L36.0684 111.529L36.7648 112.225L37.4719 111.518ZM40.812 114.858H41.812V114.444L41.5191 114.151L40.812 114.858ZM40.812 148.885L41.5191 149.593L41.812 149.3V148.885H40.812ZM35.6974 154V155H36.1116L36.4045 154.707L35.6974 154ZM4.90579 154H3.90579V155H4.90579V154ZM4.90579 70.4973V69.4973H3.90579V70.4973H4.90579ZM31.2092 79.3694H32.2092V78.3694H31.2092V79.3694ZM14.5086 79.3694V78.3694H13.5086V79.3694H14.5086ZM14.5086 107.03H13.5086V108.03H14.5086V107.03ZM31.2092 107.03V108.03H32.2092V107.03H31.2092ZM14.5086 145.128H13.5086V146.128H14.5086V145.128ZM31.2092 145.128V146.128H32.2092V145.128H31.2092ZM31.2092 115.902H32.2092V114.902H31.2092V115.902ZM14.5086 115.902V114.902H13.5086V115.902H14.5086ZM34.9903 71.2044L40.1049 76.3189L41.5191 74.9047L36.4045 69.7902L34.9903 71.2044ZM39.812 75.6118V108.073H41.812V75.6118H39.812ZM40.0941 107.377L36.754 110.822L38.1898 112.214L41.5299 108.77L40.0941 107.377ZM36.7648 112.225L40.1049 115.565L41.5191 114.151L38.179 110.811L36.7648 112.225ZM39.812 114.858V148.885H41.812V114.858H39.812ZM40.1049 148.178L34.9903 153.293L36.4045 154.707L41.5191 149.593L40.1049 148.178ZM35.6974 153H4.90579V155H35.6974V153ZM5.90579 154V70.4973H3.90579V154H5.90579ZM4.90579 71.4973H35.6974V69.4973H4.90579V71.4973ZM31.2092 78.3694H14.5086V80.3694H31.2092V78.3694ZM13.5086 79.3694V107.03H15.5086V79.3694H13.5086ZM14.5086 108.03H31.2092V106.03H14.5086V108.03ZM32.2092 107.03V79.3694H30.2092V107.03H32.2092ZM14.5086 146.128H31.2092V144.128H14.5086V146.128ZM32.2092 145.128V115.902H30.2092V145.128H32.2092ZM31.2092 114.902H14.5086V116.902H31.2092V114.902ZM13.5086 115.902V145.128H15.5086V115.902H13.5086ZM93.3641 154V155H94.8244L94.2964 153.638L93.3641 154ZM83.2394 154L82.3007 154.345L82.5414 155H83.2394V154ZM70.0877 118.198L71.0263 117.853L70.7857 117.198H70.0877V118.198ZM63.3031 118.198V117.198H62.3031V118.198H63.3031ZM63.3031 154V155H64.3031V154H63.3031ZM53.909 154H52.909V155H53.909V154ZM53.909 70.4973V69.4973H52.909V70.4973H53.909ZM84.3875 70.4973L85.0946 69.7902L84.8017 69.4973H84.3875V70.4973ZM89.5021 75.6118H90.5021V75.1976L90.2092 74.9047L89.5021 75.6118ZM89.5021 113.084L90.2092 113.791L90.5021 113.498V113.084H89.5021ZM84.3875 118.198V119.198H84.8017L85.0946 118.905L84.3875 118.198ZM79.4817 118.198V117.198H78.0214L78.5494 118.56L79.4817 118.198ZM63.3031 79.265V78.265H62.3031V79.265H63.3031ZM63.3031 109.43H62.3031V110.43H63.3031V109.43ZM79.7949 109.43V110.43H80.7949V109.43H79.7949ZM79.7949 79.265H80.7949V78.265H79.7949V79.265ZM93.3641 153H83.2394V155H93.3641V153ZM84.178 153.655L71.0263 117.853L69.149 118.543L82.3007 154.345L84.178 153.655ZM70.0877 117.198H63.3031V119.198H70.0877V117.198ZM62.3031 118.198V154H64.3031V118.198H62.3031ZM63.3031 153H53.909V155H63.3031V153ZM54.909 154V70.4973H52.909V154H54.909ZM53.909 71.4973H84.3875V69.4973H53.909V71.4973ZM83.6804 71.2044L88.7949 76.3189L90.2092 74.9047L85.0946 69.7902L83.6804 71.2044ZM88.5021 75.6118V113.084H90.5021V75.6118H88.5021ZM88.7949 112.377L83.6804 117.491L85.0946 118.905L90.2092 113.791L88.7949 112.377ZM84.3875 117.198H79.4817V119.198H84.3875V117.198ZM78.5494 118.56L92.4317 154.362L94.2964 153.638L80.4141 117.837L78.5494 118.56ZM62.3031 79.265V109.43H64.3031V79.265H62.3031ZM63.3031 110.43H79.7949V108.43H63.3031V110.43ZM80.7949 109.43V79.265H78.7949V109.43H80.7949ZM79.7949 78.265H63.3031V80.265H79.7949V78.265ZM130.995 154L130.008 154.16L130.144 155H130.995V154ZM127.133 130.202L128.12 130.042L127.984 129.202H127.133V130.202ZM111.894 130.202V129.202H111.039L110.906 130.046L111.894 130.202ZM108.136 154V155H108.991L109.124 154.156L108.136 154ZM98.6376 154L97.6541 153.819L97.4371 155H98.6376V154ZM113.981 70.4973V69.4973H113.148L112.998 70.3165L113.981 70.4973ZM125.045 70.4973L126.028 70.3142L125.876 69.4973H125.045V70.4973ZM140.598 154V155H141.801L141.581 153.817L140.598 154ZM113.146 122.165L112.158 122.009L111.976 123.165H113.146V122.165ZM125.88 122.165V123.165H127.056L126.867 122.004L125.88 122.165ZM119.409 82.3964L120.396 82.2358L118.421 82.2408L119.409 82.3964ZM131.982 153.84L128.12 130.042L126.146 130.362L130.008 154.16L131.982 153.84ZM127.133 129.202H111.894V131.202H127.133V129.202ZM110.906 130.046L107.148 153.844L109.124 154.156L112.881 130.358L110.906 130.046ZM108.136 153H98.6376V155H108.136V153ZM99.6211 154.181L114.965 70.678L112.998 70.3165L97.6541 153.819L99.6211 154.181ZM113.981 71.4973H125.045V69.4973H113.981V71.4973ZM124.062 70.6804L139.615 154.183L141.581 153.817L126.028 70.3142L124.062 70.6804ZM140.598 153H130.995V155H140.598V153ZM113.146 123.165H125.88V121.165H113.146V123.165ZM126.867 122.004L120.396 82.2358L118.422 82.557L124.893 122.325L126.867 122.004ZM118.421 82.2408L112.158 122.009L114.134 122.32L120.397 82.552L118.421 82.2408ZM177.743 70.4973V69.4973H176.743V70.4973H177.743ZM187.242 70.4973H188.242V69.4973H187.242V70.4973ZM187.242 154V155H188.242V154H187.242ZM177.743 154H176.743V155H177.743V154ZM177.743 115.797H178.743V114.797H177.743V115.797ZM159.164 115.797V114.797H158.164V115.797H159.164ZM159.164 154V155H160.164V154H159.164ZM149.77 154H148.77V155H149.77V154ZM149.77 70.4973V69.4973H148.77V70.4973H149.77ZM159.164 70.4973H160.164V69.4973H159.164V70.4973ZM159.164 107.03H158.164V108.03H159.164V107.03ZM177.743 107.03V108.03H178.743V107.03H177.743ZM177.743 71.4973H187.242V69.4973H177.743V71.4973ZM186.242 70.4973V154H188.242V70.4973H186.242ZM187.242 153H177.743V155H187.242V153ZM178.743 154V115.797H176.743V154H178.743ZM177.743 114.797H159.164V116.797H177.743V114.797ZM158.164 115.797V154H160.164V115.797H158.164ZM159.164 153H149.77V155H159.164V153ZM150.77 154V70.4973H148.77V154H150.77ZM149.77 71.4973H159.164V69.4973H149.77V71.4973ZM158.164 70.4973V107.03H160.164V70.4973H158.164ZM159.164 108.03H177.743V106.03H159.164V108.03ZM178.743 107.03V70.4973H176.743V107.03H178.743ZM235.16 70.4973V69.4973H234.443L234.213 70.1754L235.16 70.4973ZM244.763 70.4973H245.763V69.4973H244.763V70.4973ZM244.763 154V155H245.763V154H244.763ZM235.368 154H234.368V155H235.368V154ZM235.368 93.878H236.368L234.431 93.5294L235.368 93.878ZM222.634 128.114V129.114H223.329L223.572 128.463L222.634 128.114ZM222.53 128.114L221.593 128.463L221.835 129.114H222.53V128.114ZM209.796 93.878L210.733 93.5294L208.796 93.878H209.796ZM209.796 154V155H210.796V154H209.796ZM200.402 154H199.402V155H200.402V154ZM200.402 70.4973V69.4973H199.402V70.4973H200.402ZM210.005 70.4973L210.95 70.173L210.719 69.4973H210.005V70.4973ZM222.634 107.343L221.688 107.667L222.638 110.438L223.581 107.665L222.634 107.343ZM235.16 71.4973H244.763V69.4973H235.16V71.4973ZM243.763 70.4973V154H245.763V70.4973H243.763ZM244.763 153H235.368V155H244.763V153ZM236.368 154V93.878H234.368V154H236.368ZM234.431 93.5294L221.697 127.766L223.572 128.463L236.306 94.2266L234.431 93.5294ZM222.634 127.114H222.53V129.114H222.634V127.114ZM223.467 127.766L210.733 93.5294L208.858 94.2266L221.593 128.463L223.467 127.766ZM208.796 93.878V154H210.796V93.878H208.796ZM209.796 153H200.402V155H209.796V153ZM201.402 154V70.4973H199.402V154H201.402ZM200.402 71.4973H210.005V69.4973H200.402V71.4973ZM209.059 70.8215L221.688 107.667L223.58 107.019L210.95 70.173L209.059 70.8215ZM223.581 107.665L236.106 70.8191L234.213 70.1754L221.688 107.021L223.581 107.665ZM286.356 154L285.369 154.16L285.505 155H286.356V154ZM282.494 130.202L283.481 130.042L283.344 129.202H282.494V130.202ZM267.254 130.202V129.202H266.4L266.267 130.046L267.254 130.202ZM263.497 154V155H264.351L264.485 154.156L263.497 154ZM253.998 154L253.015 153.819L252.798 155H253.998V154ZM269.342 70.4973V69.4973H268.509L268.358 70.3165L269.342 70.4973ZM280.406 70.4973L281.389 70.3142L281.237 69.4973H280.406V70.4973ZM295.959 154V155H297.162L296.942 153.817L295.959 154ZM268.507 122.165L267.519 122.009L267.337 123.165H268.507V122.165ZM281.241 122.165V123.165H282.417L282.228 122.004L281.241 122.165ZM274.77 82.3964L275.757 82.2358L273.782 82.2408L274.77 82.3964ZM287.343 153.84L283.481 130.042L281.507 130.362L285.369 154.16L287.343 153.84ZM282.494 129.202H267.254V131.202H282.494V129.202ZM266.267 130.046L262.509 153.844L264.485 154.156L268.242 130.358L266.267 130.046ZM263.497 153H253.998V155H263.497V153ZM254.982 154.181L270.326 70.678L268.358 70.3165L253.015 153.819L254.982 154.181ZM269.342 71.4973H280.406V69.4973H269.342V71.4973ZM279.423 70.6804L294.975 154.183L296.942 153.817L281.389 70.3142L279.423 70.6804ZM295.959 153H286.356V155H295.959V153ZM268.507 123.165H281.241V121.165H268.507V123.165ZM282.228 122.004L275.757 82.2358L273.783 82.557L280.254 122.325L282.228 122.004ZM273.782 82.2408L267.519 122.009L269.495 122.32L275.758 82.552L273.782 82.2408Z"
            fill="white"
            mask="url(#path-1-outside-1_45_13)"
          />
          <mask
            id="path-3-outside-2_45_13"
            maskUnits="userSpaceOnUse"
            x="74"
            y="12"
            width="153"
            height="42"
            fill="black"
          >
            <rect fill="white" x="74" y="12" width="153" height="42" />
            <path d="M79.9089 48.7751H89.9989V53H75.3361V13.2364H79.9089V48.7751ZM113.884 13.2364L116.319 15.6719V50.5645L113.884 53H100.762L98.3264 50.5645V15.6719L100.762 13.2364H113.884ZM111.747 17.4613H102.899V48.7751H111.747V17.4613ZM143.957 13.2364V50.5645L141.521 53H128.946L126.51 50.5645V13.2364H131.083V48.7751H139.384V13.2364H143.957ZM167.979 13.2364H172.204V53H167.482L158.337 24.1217V53H154.112V13.2364H158.834L167.979 42.065V13.2364ZM197.902 13.2364L200.337 15.6719V24.6187H195.765V17.4613H186.917V48.7751H195.765V35.3052H190.695V31.0803H200.337V50.5645L197.902 53H184.78L182.344 50.5645V15.6719L184.78 13.2364H197.902ZM225.539 17.4613H215.101V30.7324H223.153V34.9076H215.101V48.7751H225.539V53H210.528V13.2364H225.539V17.4613Z" />
          </mask>
          <path
            d="M79.9089 48.7751H89.9989V53H75.3361V13.2364H79.9089V48.7751ZM113.884 13.2364L116.319 15.6719V50.5645L113.884 53H100.762L98.3264 50.5645V15.6719L100.762 13.2364H113.884ZM111.747 17.4613H102.899V48.7751H111.747V17.4613ZM143.957 13.2364V50.5645L141.521 53H128.946L126.51 50.5645V13.2364H131.083V48.7751H139.384V13.2364H143.957ZM167.979 13.2364H172.204V53H167.482L158.337 24.1217V53H154.112V13.2364H158.834L167.979 42.065V13.2364ZM197.902 13.2364L200.337 15.6719V24.6187H195.765V17.4613H186.917V48.7751H195.765V35.3052H190.695V31.0803H200.337V50.5645L197.902 53H184.78L182.344 50.5645V15.6719L184.78 13.2364H197.902ZM225.539 17.4613H215.101V30.7324H223.153V34.9076H215.101V48.7751H225.539V53H210.528V13.2364H225.539V17.4613Z"
            fill="white"
          />
          <path
            d="M79.9089 48.7751H78.9089V49.7751H79.9089V48.7751ZM89.9989 48.7751H90.9989V47.7751H89.9989V48.7751ZM89.9989 53V54H90.9989V53H89.9989ZM75.3361 53H74.3361V54H75.3361V53ZM75.3361 13.2364V12.2364H74.3361V13.2364H75.3361ZM79.9089 13.2364H80.9089V12.2364H79.9089V13.2364ZM79.9089 49.7751H89.9989V47.7751H79.9089V49.7751ZM88.9989 48.7751V53H90.9989V48.7751H88.9989ZM89.9989 52H75.3361V54H89.9989V52ZM76.3361 53V13.2364H74.3361V53H76.3361ZM75.3361 14.2364H79.9089V12.2364H75.3361V14.2364ZM78.9089 13.2364V48.7751H80.9089V13.2364H78.9089ZM113.884 13.2364L114.591 12.5293L114.298 12.2364H113.884V13.2364ZM116.319 15.6719H117.319V15.2577L117.026 14.9648L116.319 15.6719ZM116.319 50.5645L117.026 51.2716L117.319 50.9787V50.5645H116.319ZM113.884 53V54H114.298L114.591 53.7071L113.884 53ZM100.762 53L100.055 53.7071L100.348 54H100.762V53ZM98.3264 50.5645H97.3264V50.9787L97.6193 51.2716L98.3264 50.5645ZM98.3264 15.6719L97.6193 14.9648L97.3264 15.2577V15.6719H98.3264ZM100.762 13.2364V12.2364H100.348L100.055 12.5293L100.762 13.2364ZM111.747 17.4613H112.747V16.4613H111.747V17.4613ZM102.899 17.4613V16.4613H101.899V17.4613H102.899ZM102.899 48.7751H101.899V49.7751H102.899V48.7751ZM111.747 48.7751V49.7751H112.747V48.7751H111.747ZM113.177 13.9435L115.612 16.379L117.026 14.9648L114.591 12.5293L113.177 13.9435ZM115.319 15.6719V50.5645H117.319V15.6719H115.319ZM115.612 49.8574L113.177 52.2929L114.591 53.7071L117.026 51.2716L115.612 49.8574ZM113.884 52H100.762V54H113.884V52ZM101.469 52.2929L99.0335 49.8574L97.6193 51.2716L100.055 53.7071L101.469 52.2929ZM99.3264 50.5645V15.6719H97.3264V50.5645H99.3264ZM99.0335 16.379L101.469 13.9435L100.055 12.5293L97.6193 14.9648L99.0335 16.379ZM100.762 14.2364H113.884V12.2364H100.762V14.2364ZM111.747 16.4613H102.899V18.4613H111.747V16.4613ZM101.899 17.4613V48.7751H103.899V17.4613H101.899ZM102.899 49.7751H111.747V47.7751H102.899V49.7751ZM112.747 48.7751V17.4613H110.747V48.7751H112.747ZM143.957 13.2364H144.957V12.2364H143.957V13.2364ZM143.957 50.5645L144.664 51.2716L144.957 50.9787V50.5645H143.957ZM141.521 53V54H141.935L142.228 53.7071L141.521 53ZM128.946 53L128.239 53.7071L128.532 54H128.946V53ZM126.51 50.5645H125.51V50.9787L125.803 51.2716L126.51 50.5645ZM126.51 13.2364V12.2364H125.51V13.2364H126.51ZM131.083 13.2364H132.083V12.2364H131.083V13.2364ZM131.083 48.7751H130.083V49.7751H131.083V48.7751ZM139.384 48.7751V49.7751H140.384V48.7751H139.384ZM139.384 13.2364V12.2364H138.384V13.2364H139.384ZM142.957 13.2364V50.5645H144.957V13.2364H142.957ZM143.25 49.8574L140.814 52.2929L142.228 53.7071L144.664 51.2716L143.25 49.8574ZM141.521 52H128.946V54H141.521V52ZM129.653 52.2929L127.217 49.8574L125.803 51.2716L128.239 53.7071L129.653 52.2929ZM127.51 50.5645V13.2364H125.51V50.5645H127.51ZM126.51 14.2364H131.083V12.2364H126.51V14.2364ZM130.083 13.2364V48.7751H132.083V13.2364H130.083ZM131.083 49.7751H139.384V47.7751H131.083V49.7751ZM140.384 48.7751V13.2364H138.384V48.7751H140.384ZM139.384 14.2364H143.957V12.2364H139.384V14.2364ZM167.979 13.2364V12.2364H166.979V13.2364H167.979ZM172.204 13.2364H173.204V12.2364H172.204V13.2364ZM172.204 53V54H173.204V53H172.204ZM167.482 53L166.529 53.3019L166.75 54H167.482V53ZM158.337 24.1217L159.29 23.8198L157.337 24.1217H158.337ZM158.337 53V54H159.337V53H158.337ZM154.112 53H153.112V54H154.112V53ZM154.112 13.2364V12.2364H153.112V13.2364H154.112ZM158.834 13.2364L159.787 12.934L159.566 12.2364H158.834V13.2364ZM167.979 42.065L167.026 42.3674L168.979 42.065H167.979ZM167.979 14.2364H172.204V12.2364H167.979V14.2364ZM171.204 13.2364V53H173.204V13.2364H171.204ZM172.204 52H167.482V54H172.204V52ZM168.436 52.6981L159.29 23.8198L157.383 24.4236L166.529 53.3019L168.436 52.6981ZM157.337 24.1217V53H159.337V24.1217H157.337ZM158.337 52H154.112V54H158.337V52ZM155.112 53V13.2364H153.112V53H155.112ZM154.112 14.2364H158.834V12.2364H154.112V14.2364ZM157.881 13.5388L167.026 42.3674L168.933 41.7626L159.787 12.934L157.881 13.5388ZM168.979 42.065V13.2364H166.979V42.065H168.979ZM197.902 13.2364L198.609 12.5293L198.316 12.2364H197.902V13.2364ZM200.337 15.6719H201.337V15.2577L201.045 14.9648L200.337 15.6719ZM200.337 24.6187V25.6187H201.337V24.6187H200.337ZM195.765 24.6187H194.765V25.6187H195.765V24.6187ZM195.765 17.4613H196.765V16.4613H195.765V17.4613ZM186.917 17.4613V16.4613H185.917V17.4613H186.917ZM186.917 48.7751H185.917V49.7751H186.917V48.7751ZM195.765 48.7751V49.7751H196.765V48.7751H195.765ZM195.765 35.3052H196.765V34.3052H195.765V35.3052ZM190.695 35.3052H189.695V36.3052H190.695V35.3052ZM190.695 31.0803V30.0803H189.695V31.0803H190.695ZM200.337 31.0803H201.337V30.0803H200.337V31.0803ZM200.337 50.5645L201.045 51.2716L201.337 50.9787V50.5645H200.337ZM197.902 53V54H198.316L198.609 53.7071L197.902 53ZM184.78 53L184.073 53.7071L184.366 54H184.78V53ZM182.344 50.5645H181.344V50.9787L181.637 51.2716L182.344 50.5645ZM182.344 15.6719L181.637 14.9648L181.344 15.2577V15.6719H182.344ZM184.78 13.2364V12.2364H184.366L184.073 12.5293L184.78 13.2364ZM197.195 13.9435L199.63 16.379L201.045 14.9648L198.609 12.5293L197.195 13.9435ZM199.337 15.6719V24.6187H201.337V15.6719H199.337ZM200.337 23.6187H195.765V25.6187H200.337V23.6187ZM196.765 24.6187V17.4613H194.765V24.6187H196.765ZM195.765 16.4613H186.917V18.4613H195.765V16.4613ZM185.917 17.4613V48.7751H187.917V17.4613H185.917ZM186.917 49.7751H195.765V47.7751H186.917V49.7751ZM196.765 48.7751V35.3052H194.765V48.7751H196.765ZM195.765 34.3052H190.695V36.3052H195.765V34.3052ZM191.695 35.3052V31.0803H189.695V35.3052H191.695ZM190.695 32.0803H200.337V30.0803H190.695V32.0803ZM199.337 31.0803V50.5645H201.337V31.0803H199.337ZM199.63 49.8574L197.195 52.2929L198.609 53.7071L201.045 51.2716L199.63 49.8574ZM197.902 52H184.78V54H197.902V52ZM185.487 52.2929L183.052 49.8574L181.637 51.2716L184.073 53.7071L185.487 52.2929ZM183.344 50.5645V15.6719H181.344V50.5645H183.344ZM183.052 16.379L185.487 13.9435L184.073 12.5293L181.637 14.9648L183.052 16.379ZM184.78 14.2364H197.902V12.2364H184.78V14.2364ZM225.539 17.4613V18.4613H226.539V17.4613H225.539ZM215.101 17.4613V16.4613H214.101V17.4613H215.101ZM215.101 30.7324H214.101V31.7324H215.101V30.7324ZM223.153 30.7324H224.153V29.7324H223.153V30.7324ZM223.153 34.9076V35.9076H224.153V34.9076H223.153ZM215.101 34.9076V33.9076H214.101V34.9076H215.101ZM215.101 48.7751H214.101V49.7751H215.101V48.7751ZM225.539 48.7751H226.539V47.7751H225.539V48.7751ZM225.539 53V54H226.539V53H225.539ZM210.528 53H209.528V54H210.528V53ZM210.528 13.2364V12.2364H209.528V13.2364H210.528ZM225.539 13.2364H226.539V12.2364H225.539V13.2364ZM225.539 16.4613H215.101V18.4613H225.539V16.4613ZM214.101 17.4613V30.7324H216.101V17.4613H214.101ZM215.101 31.7324H223.153V29.7324H215.101V31.7324ZM222.153 30.7324V34.9076H224.153V30.7324H222.153ZM223.153 33.9076H215.101V35.9076H223.153V33.9076ZM214.101 34.9076V48.7751H216.101V34.9076H214.101ZM215.101 49.7751H225.539V47.7751H215.101V49.7751ZM224.539 48.7751V53H226.539V48.7751H224.539ZM225.539 52H210.528V54H225.539V52ZM211.528 53V13.2364H209.528V53H211.528ZM210.528 14.2364H225.539V12.2364H210.528V14.2364ZM224.539 13.2364V17.4613H226.539V13.2364H224.539Z"
            fill="white"
            mask="url(#path-3-outside-2_45_13)"
          />
        </svg>

        <Loader2 className="size-10 animate-spin text-zinc-100" />
      </div>

      {/* Cabeçalho */}
      <header className="z-40">
        {/* Sidebar */}
        {hasActiveDesktopHeader && (
          <aside className="fixed left-0 top-0 z-40 w-28 rounded-br-2xl border-b-4 border-r-4 border-zinc-800 bg-zinc-950/80 py-10">
            <div className="px-4 py-2">
              <img
                alt="Logo do Lounge Brahma"
                className="pointer-events-none select-none"
                src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
              />
            </div>

            <nav className="mt-5">
              <Link to="/#proximos-jogos" className="group relative">
                <div className="flex cursor-pointer items-center justify-center bg-zinc-800 py-5 text-zinc-300 transition-all hover:brightness-75">
                  <HiOutlineTicket className="size-7" />
                </div>

                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Próximos jogos
                </div>
              </Link>

              <Link to="/#galeria" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <FaRegImages className="size-7" />
                </div>

                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Galeria
                </div>
              </Link>

              <Link to="/#faca-seu-evento" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <MdOutlineEmojiEvents className="size-7" />
                </div>
                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Faça seu evento
                </div>
              </Link>

              <Link to="/#perguntas-frequentes" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <IoHelpCircleOutline className="size-7" />
                </div>

                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Perguntas frequentes
                </div>
              </Link>
            </nav>
          </aside>
        )}

        {/* Menu minha conta */}
        {hasActiveDesktopHeader && (
          <div className="fixed right-20 top-0 z-40 flex overflow-hidden rounded-b-md bg-zinc-950/90 text-zinc-200">
            <div className="bg-white">
              <img
                src="/escudos/corinthians.png"
                alt="Escudo do time corinthians"
                className="object-cove pointer-events-none size-16 select-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/minha-conta"
                className="flex h-full select-none items-center px-6 transition-all hover:bg-zinc-800"
              >
                <User className="mr-2 size-4" />
                Minha conta
              </Link>
            </div>
          </div>
        )}

        {/* Menu alternativa + Mobile */}
        {!hasActiveDesktopHeader && (
          <div className="fixed left-0 top-0 z-40 flex h-20 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 backdrop-blur-sm lg:px-20">
            <Link to="/">
              <img
                className="h-12"
                alt="Logo Lounge Brahma"
                src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
              />
            </Link>

            <div className="flex items-center gap-6">
              <nav className="item-center hidden gap-5 font-semibold text-zinc-100 lg:flex">
                <Link
                  to="/#proximos-jogos"
                  title="Próximos jogos"
                  className={cn(
                    'py-2 transition-all hover:brightness-75',
                    hash === '#proximos-jogos' && 'text-red-500',
                  )}
                >
                  Próximos jogos
                </Link>

                <Link
                  to="/#galeria"
                  title="Galeria"
                  className={cn(
                    'py-2 transition-all hover:brightness-75',
                    hash === '#galeria' && 'text-red-500',
                  )}
                >
                  Galeria
                </Link>

                <Link
                  to="/#faca-seu-evento"
                  title="Faça seu evento"
                  className={cn(
                    'py-2 transition-all hover:brightness-75',
                    hash === '#faca-seu-evento' && 'text-red-500',
                  )}
                >
                  Faça seu evento
                </Link>
                <Link
                  to="/#perguntas-frequentes"
                  title="Pergutas frequentes"
                  className={cn(
                    'py-2 transition-all hover:brightness-75',
                    hash === '#perguntas-frequentes' && 'text-red-500',
                  )}
                >
                  Perguntas frequentes
                </Link>
              </nav>

              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  title="Minha conta"
                  className="rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 font-semibold text-zinc-700 transition-all hover:brightness-75"
                >
                  <User className="mr-2 size-4" />
                  Minha conta
                </Button>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      size="icon"
                      type="button"
                      className="flex lg:hidden"
                      title="Clique para abrir o menu lateral"
                    >
                      <Menu className="size-5" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent className="border-zinc-800 bg-zinc-950">
                    <div className="pointer-events-none flex select-none items-center justify-center gap-4">
                      <img
                        alt="Logo do Lounge Brahma"
                        className="size-20 object-contain"
                        src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
                      />
                    </div>

                    <nav className="mt-4 flex flex-col gap-3 text-zinc-200">
                      <SheetClose asChild>
                        <Link
                          to="/#proximos-jogos"
                          title="Próximos jogos"
                          className="flex items-center gap-3 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <HiOutlineTicket className="size-6" />
                          Próximos jogos
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          to="/#galeria"
                          title="Galeria"
                          className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <FaRegImages className="size-5" />
                          Galeria
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          to="/#faca-seu-evento"
                          title="Faça seu evento"
                          className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <MdOutlineEmojiEvents className="size-5" />
                          Faça seu evento
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          to="/#perguntas-frequentes"
                          title="Pergutas frequentes"
                          className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <IoHelpCircleOutline className="size-5" />
                          Perguntas frequentes
                        </Link>
                      </SheetClose>
                    </nav>

                    <div className="my-7 flex flex-row gap-3">
                      <Link
                        to=""
                        target="_blank"
                        title="Clique para visitar nosso Instagram"
                        className="flex size-10 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                      >
                        <PiInstagramLogoThin className="size-5" />
                      </Link>

                      <Link
                        to=""
                        target="_blank"
                        title="Clique para visitar nosso Facebook"
                        className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-brand-gold-500 hover:text-white hover:brightness-75"
                      >
                        <FaFacebookF className="size-5" />
                      </Link>

                      <Link
                        to=""
                        target="_blank"
                        title="Clique para visitar nosso Youtube"
                        className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                      >
                        <FaYoutube className="size-5" />
                      </Link>
                    </div>

                    <div className="text-sm text-zinc-500">
                      <h2>
                        @{new Date().getFullYear()} | Todos os direitos
                        reservados -{' '}
                        <Link
                          to="/"
                          target="_blank"
                          className="text-blue-500 underline"
                        >
                          Termos de serviço
                        </Link>{' '}
                        &{' '}
                        <Link
                          to="/"
                          target="_blank"
                          className="text-blue-500 underline"
                        >
                          Política de privacidade
                        </Link>
                      </h2>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="relative h-[93vh] overflow-hidden rounded-br-[4rem]">
        {/* Redes sociais */}
        <div className="absolute right-20 top-1/2 z-20 hidden -translate-y-1/2 flex-col justify-center gap-6 lg:flex">
          <Reveal>
            <Link
              to=""
              target="_blank"
              title="Clique para visitar nosso Instagram"
              className="flex size-12 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
            >
              <PiInstagramLogoThin className="size-7" />
            </Link>
          </Reveal>

          <Reveal>
            <Link
              to=""
              target="_blank"
              title="Clique para visitar nosso Facebook"
              className="flex size-12 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-brand-gold-500 hover:text-white hover:brightness-75"
            >
              <FaFacebookF className="size-5" />
            </Link>
          </Reveal>

          <Reveal>
            <Link
              to=""
              target="_blank"
              title="Clique para visitar nosso Youtube"
              className="flex size-12 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
            >
              <FaYoutube className="size-6" />
            </Link>
          </Reveal>
        </div>

        {/* Texto principal da seção */}
        <div className="relative h-full">
          <div
            className={cn(
              'absolute left-0 top-0 z-10 flex h-full w-full items-center bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70',
              !hasActiveDesktopHeader ? 'pl-0' : 'pl-20',
            )}
          >
            <div className="px-4 lg:px-20">
              <Reveal>
                <div className="flex flex-row gap-4 lg:hidden">
                  <Link
                    to=""
                    target="_blank"
                    title="Clique para visitar nosso Instagram"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                  >
                    <PiInstagramLogoThin className="size-6" />
                  </Link>

                  <Link
                    to=""
                    target="_blank"
                    title="Clique para visitar nosso Facebook"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-brand-gold-500 hover:text-white hover:brightness-75"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>

                  <Link
                    to=""
                    target="_blank"
                    title="Clique para visitar nosso Youtube"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                  >
                    <FaYoutube className="size-5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal>
                <span className="hidden items-center rounded-full bg-red-700 px-3 py-2 text-sm uppercase text-white lg:inline-flex">
                  <HeartHandshake className="mr-2 size-4" />
                  Feito para você que é apaixonado no timão
                </span>
              </Reveal>

              <Reveal>
                <h2 className="text-shadow-xl mt-5 max-w-4xl select-none text-xl font-extrabold uppercase tracking-tight text-zinc-200 sm:text-3xl md:text-4xl xl:text-5xl">
                  Viva a{' '}
                  <strong className="text-red-600">melhor experiência</strong>
                  , <br /> no Camarote Lounge Brahma <br /> da{' '}
                  <strong className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Neo Química Arena.
                  </strong>
                </h2>
              </Reveal>

              <Reveal>
                <h4 className="mt-3 max-w-xl select-none text-xl font-semibold text-zinc-300 md:text-2xl">
                  Camarote Open Bar & Open Food com uma vista incrível para os
                  jogos do Corinthians.
                </h4>
              </Reveal>

              <Reveal>
                <button
                  onClick={handleScrollClick}
                  title="Clique para ver os próximos jogos"
                  className="mt-6 flex items-center py-2 text-zinc-200 transition-all hover:brightness-75"
                >
                  <Mouse className="mr-2 size-4 animate-bounce" />
                  Clique para descer
                </button>
              </Reveal>
            </div>
          </div>

          <img
            alt="Imagem do Lounge Brahma"
            className="pointer-events-none h-full w-full select-none object-cover"
            src="https://static.athletico.com.br/wp-content/uploads/2024/10/05110457/ChoperiaArenaBrahma-1200.jpg"
          />
        </div>
      </section>

      <section className="relative z-20 -mt-24 flex flex-col border-b-2 border-y-zinc-700 xl:flex-row">
        <div className="flex min-h-24 flex-1 items-center bg-[url(/background.png)] bg-cover bg-center bg-no-repeat py-8 pl-4 lg:items-start xl:pl-20">
          <div
            className={cn(
              `sticky top-[600px] xl:pb-[70px]`,
              !hasActiveDesktopHeader ? 'pl-0' : 'pl-20',
            )}
          >
            <Reveal>
              <div className="flex items-center text-zinc-200">
                <div className="flex flex-col items-center justify-center">
                  <img
                    alt="Escudo do Corinthians"
                    src="/escudos/corinthians.png"
                    className="pointer-events-none size-20 select-none object-contain"
                  />
                </div>

                <X className="size-6 font-bold" />

                <div className="flex flex-col items-center justify-center">
                  <img
                    alt="Escudo do Time"
                    src={nextGamesList[0].shieldTime}
                    className="pointer-events-none size-20 select-none object-contain"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-md font-semibold tracking-tight text-white">
                Próximo jogo - {nextGamesList[0].date}
              </h2>
            </Reveal>

            <Reveal>
              <span className="mt-2 block text-xl font-bold uppercase text-white 2xl:text-2xl">
                {nextGamesList[0].gameTitle}
              </span>
            </Reveal>

            <Reveal>
              <Button
                type="button"
                onClick={() => navigate(`/ingressos/${nextGamesList[0].slug}`)}
                className="mt-5 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 text-zinc-900 transition-all hover:brightness-75"
              >
                <Ticket className="mr-2 size-4" />
                Garanta agora seu ingresso
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="flex-[1.8] overflow-hidden bg-zinc-950 bg-cover bg-center bg-no-repeat px-4 py-5 text-white xl:px-5">
          <div className="mb-4 flex items-center justify-between">
            <Reveal classes="hidden md:block">
              <span className="pointer-events-none select-none rounded-sm bg-red-700 px-3 py-1 text-white">
                {nextGamesList.length} jogos disponíveis para compra
              </span>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  title="Clique para voltar um slide"
                  className="button-prev-slide flex h-10 w-10 items-center justify-center rounded-md border-2 border-zinc-700 bg-zinc-800 text-zinc-400"
                >
                  <GrFormPrevious size={20} />
                </button>
                <button
                  type="button"
                  title="Clique para avançar um slide"
                  className="button-next-slide flex h-10 w-10 items-center justify-center rounded-md border-2 border-zinc-700 bg-zinc-800 text-zinc-400"
                >
                  <MdNavigateNext size={20} />
                </button>
              </div>
            </Reveal>
          </div>

          <Swiper
            loop
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.button-next-slide',
              prevEl: '.button-prev-slide',
            }}
            autoplay={{
              delay: 8000,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {nextGamesList.map((game, i) => {
              return (
                <SwiperSlide key={i}>
                  <Reveal>
                    <div className="flex-1 overflow-hidden rounded-sm bg-white shadow-lg">
                      <div
                        className={cn(
                          'flex items-center justify-between bg-cover bg-center bg-no-repeat px-10 py-4',
                          i % 2 === 0
                            ? 'bg-[url(/background-gold.png)]'
                            : 'bg-[url(/background.png)]',
                        )}
                      >
                        <div className="flex flex-col items-center justify-center">
                          <img
                            alt="Escudo do Corinthians"
                            src="/escudos/corinthians.png"
                            className="size-24 object-contain"
                          />
                          <h2 className="font-semibold">Corinthians</h2>
                        </div>

                        <p className="px-4 text-xl font-extrabold text-transparent text-white">
                          vs.
                        </p>

                        <div className="flex flex-col items-center justify-center">
                          <img
                            alt="Escudo do Time"
                            src={game.shieldTime}
                            className="size-24 object-contain"
                          />
                          <h2 className="font-semibold">{game.opponent}</h2>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex flex-col justify-center">
                          <h4 className="font-bold text-zinc-700">
                            {game.date}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-zinc-700">
                              {game.startTime}
                            </span>
                            <span className="text-zinc-700">
                              {game.startGameTime}
                            </span>
                          </div>
                        </div>

                        <Button
                          type="button"
                          title="Clique para comprar os ingressos"
                          onClick={() => navigate(`/ingressos/${game.slug}`)}
                          className={cn(
                            'text-md mt-4 h-12 w-full rounded-none transition-all hover:brightness-75',
                            i % 2 === 0
                              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-zinc-700'
                              : 'bg-red-700 text-white hover:bg-red-700',
                          )}
                        >
                          <Ticket className="mr-2 size-4" />
                          Comprar ingressos
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>

      {/* Próximos jogos */}
      <section ref={refNextGames} className="px-4 py-10 xl:px-20">
        <div className="flex flex-col gap-4">
          {sortedKeys.map((key, i) => {
            const games = gamesGroupedByMonth[key]
            const [month, year] = key.split('/')
            const monthName = new Date(
              Number(year),
              Number(month) - 1,
            ).toLocaleString('pt-BR', { month: 'long' })

            return (
              <Reveal key={i}>
                <div className="flex flex-col items-start gap-4 rounded-md border bg-zinc-50 p-5">
                  <h2 className="mb-4 mt-5 text-2xl font-bold uppercase tracking-tighter text-zinc-800">
                    {monthName} {year}
                  </h2>
                  <div className="flex w-full flex-col gap-6">
                    {games.map((game, i) => (
                      <div key={i}>
                        <div className="hidden w-full items-center justify-between border-b border-zinc-200 pb-4 lg:flex">
                          <div className="flex items-center">
                            <div className="flex flex-col items-start border-r border-zinc-300 md:w-40">
                              <h3 className="font-semibold text-zinc-600">
                                {game.date.split(' ')[0]}{' '}
                                {game.date.split(' ')[2].split('/')[0]}/
                                {game.date.split(' ')[2].split('/')[1]}
                              </h3>
                              <p className="bg-gradient-to-r from-red-500 to-yellow-600 bg-clip-text text-sm font-semibold text-transparent">
                                {game.startGameTime.split(': ')[1]}
                              </p>
                            </div>
                            <div className="flex items-center border-r border-zinc-300 px-4">
                              <img
                                width={90}
                                alt="Logo Paulistão"
                                className="pointer-events-none select-none rounded-md object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1oPV1qsi5eo5xaYAqjaszaR1yAmwPLRRNA&s"
                              />
                            </div>
                          </div>

                          <div className="flex flex-1 items-center xl:pl-2 2xl:pl-20">
                            <div className="flex items-center gap-2">
                              <img
                                width={60}
                                alt="Escudo Corinthians"
                                src="/escudos/corinthians.png"
                                className="pointer-events-none select-none object-contain"
                              />
                              <h2 className="whitespace-nowrap text-left font-semibold">
                                Corinthians
                              </h2>
                            </div>
                            <p className="shrink-0 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text px-4 text-xl font-extrabold text-transparent">
                              vs.
                            </p>
                            <div className="flex shrink-0 items-center gap-2">
                              <img
                                width={50}
                                src={game.shieldTime}
                                alt={`Escudo ${game.opponent}`}
                                className="pointer-events-none select-none object-cover"
                              />
                              <h2
                                title={game.opponent}
                                className="w-26 truncate whitespace-nowrap text-left font-semibold"
                              >
                                {game.opponent}
                              </h2>
                            </div>
                          </div>

                          <div className="flex items-start justify-end gap-2">
                            <div className="flex flex-col items-center gap-2">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                onClick={() =>
                                  navigate(`/ingressos/${game.slug}`)
                                }
                                className={
                                  'mt-4 h-10 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Ticket className="mr-2 size-4" />
                                Comprar ingressos
                              </Button>

                              <span className="text-xs font-bold text-zinc-600">
                                10% desconto: COPA10
                              </span>
                            </div>

                            <div className="hidden flex-col items-center gap-2 xl:flex">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                className={
                                  'mt-4 flex h-10 rounded-none border-2 border-zinc-300 bg-transparent text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Mail className="mr-2 size-4" />
                                Lembre-me do jogo
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col border-b pb-4 lg:hidden">
                          <div className="flex w-full items-center justify-between gap-5">
                            <div className="flex flex-col items-center">
                              <img
                                className="size-20 object-contain"
                                alt="Escudo do Corinthians"
                                src="/escudos/corinthians.png"
                              />

                              <h2 className="whitespace-nowrap text-left font-semibold">
                                Corinthians
                              </h2>
                            </div>

                            <div className="flex flex-1 flex-col items-center">
                              <h2 className="text-sm font-bold text-zinc-700">
                                {game.date.split('-')[1].trim()}
                              </h2>
                              <span className="hidden md:block">
                                {game.startGameTime}
                              </span>
                              <span className="block md:hidden">
                                {game.startGameTime.replace('Jogo:', '').trim()}
                              </span>
                            </div>

                            <div className="flex flex-col items-center">
                              <img
                                className="size-20 object-contain"
                                src={game.shieldTime}
                                alt="Escudo do Corinthians"
                              />

                              <h2
                                title={game.opponent}
                                className="max-w-20 truncate whitespace-nowrap text-left font-semibold"
                              >
                                {game.opponent}
                              </h2>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-col items-start gap-2 md:flex-row">
                            <div className="flex w-full flex-col-reverse items-center gap-2 md:flex-col">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                onClick={() =>
                                  navigate(`/ingressos/${game.slug}`)
                                }
                                className={
                                  'h-10 w-full rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Ticket className="mr-2 size-4" />
                                Comprar ingressos
                              </Button>

                              <span className="text-xs font-bold text-zinc-600">
                                10% desconto: COPA10
                              </span>
                            </div>

                            <div className="w-full flex-col items-center gap-2">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                className={
                                  'flex h-10 w-full rounded-none border-2 border-zinc-300 bg-transparent text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Mail className="mr-2 size-4" />
                                Lembre-me do jogo
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-2 w-full bg-gradient-to-r from-red-600 from-45% via-yellow-600 via-55% to-yellow-600" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Galeria de fotos */}
      <section
        ref={refGalery}
        className="rounded-br-[3rem] rounded-tl-[3rem] bg-zinc-900 px-4 py-14 md:rounded-br-[5rem] md:rounded-tl-[5rem] lg:px-20"
      >
        <h2 className="mb-5 border-l-4 border-l-red-700 pl-5 text-xl font-bold uppercase text-zinc-200 md:text-2xl">
          Galeria de fotos
        </h2>

        <FocusCardsSlug cards={photos} />
      </section>

      {/* Faça seu evento */}
      <section
        ref={refEvent}
        className="flex flex-col-reverse items-start gap-10 rounded-bl-[3rem] bg-zinc-50 px-4 py-14 md:rounded-bl-[5rem] lg:flex-row lg:px-20 xl:items-center"
      >
        <div className="w-full flex-1 overflow-hidden">
          <Reveal classes="w-full">
            <img
              alt="Imagem do Lounge Brahma"
              className="w-full select-none rounded-sm border-4 border-zinc-200 transition-all duration-500 hover:scale-105"
              src="https://loungebrahma.com.br/wp-content/uploads/2024/11/Lounge-Brahma-Corinthians-x-Palmeiras-058.webp"
            />
          </Reveal>
        </div>
        <div className="flex-[1.8] xl:flex-1">
          <Reveal>
            <h2 className="text-md font-extrabold uppercase text-red-700 md:text-xl">
              O Seu evento no melhor <br /> camarote da Neo Quimica Arena!
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-4 text-lg text-zinc-700">
              Situado no coração do estádio, oferecemos uma vista panorâmica
              incomparável do campo de jogo.
              <br />
              <br />
              Seja para celebrar conquistas empresariais, fortalecer laços com
              clientes e colaboradores ou simplesmente desfrutar de momentos
              memoráveis com amigos e familiares, o Camarote Premium da Neo
              Química Arena é o cenário perfeito para transformar seus eventos
              em experiências inesquecíveis.
            </p>
          </Reveal>

          <Reveal>
            <Button
              type="button"
              className="mt-5 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 uppercase text-zinc-900"
              title="Clique para criar uma rota até a arena"
            >
              <FaWhatsapp className="mr-2 size-4" />
              Entrar em contato conosco
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section ref={refFAQ} className="px-4 py-10 lg:px-40">
        <Reveal>
          <h2 className="pb-10 text-center text-xl font-semibold text-zinc-800 lg:text-4xl">
            FAQ - Perguntas frequentes
          </h2>
        </Reveal>

        <div className="flex items-center justify-center">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <Reveal>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Como faço para comprar Ingresso no Camarote Corinthians Lounge
                  Brahma?
                </AccordionTrigger>
                <AccordionContent>
                  Acesse nosso FAQ: Os ingressos estão disponíveis
                  exclusivamente através do nosso site{' '}
                  <Link
                    to="/#proximos-jogos"
                    className="text-red-500 underline"
                  >
                    https://loungebrahma.com.br/#proximos-jogos
                  </Link>
                  . Selecionando o produto escolhido, efetuando o pagamento, ao
                  finalizar a compra você receberá em seu e-mail o QRCODE com
                  acesso para ser apresentado na portaria no dia do jogo. O
                  único canal de vendas oficial para a compra de ingressos é
                  nosso site, caso tenha adquirido de terceiros, não nos
                  responsabilizamos por compras fora do canal oficial de vendas.
                </AccordionContent>
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Qual é a visibilidade do campo a partir no Camarote
                  Corinthians Lounge Brahma?
                </AccordionTrigger>
                <AccordionContent>
                  O Camarotes na Neo Química Arena oferecem uma visão
                  privilegiada do campo. Estamos centralizado no meio do campo
                  para conhecer mais acesse nossa galeria e descubra a melhor
                  visibilidade com a melhor experiência.
                </AccordionContent>
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  O que contempla ao comprar ingresso no Camarote Corinthians
                  Lounge Brahma?
                </AccordionTrigger>
                <AccordionContent>
                  Ao adquirir a entrada para o Camarote Lounge Brahma, você terá
                  direito ao ingresso do jogo no setor de cadeiras exclusivas do
                  camarote com visão central privilegiada, open bar e open food,
                  serviço de barbearia, show ao vivo ou dj, mesa de jogos. Além
                  claro, da presença de celebridades e ex jogadores! Contamos
                  com o serviço de tatuagem, que é pago diretamente ao tatuador,
                  e não está incluído no valor do ingresso. Ressaltamos que de
                  acordo com a Lei Municipal nº12.402 de 03 de Julho de 1997, o
                  serviço de bebidas alcoólicas é interrompido 2 (duas) horas
                  antes do início da partida. O mesmo é retomado ao término da
                  partida, por 1(uma) hora e 30 (trinta) minutos.
                </AccordionContent>
              </AccordionItem>
            </Reveal>

            <Reveal>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  É possível selecionar o assento no ato da compra do ingresso?
                </AccordionTrigger>
                <AccordionContent>
                  No dia do evento ao receber o seu acesso ao camarote, você
                  receberá os detalhes sobre o seu acesso ao camarote, inclusive
                  o lugar do seu assento.
                </AccordionContent>
              </AccordionItem>
            </Reveal>

            <Reveal>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Criança paga ingresso para o camarote?
                </AccordionTrigger>
                <AccordionContent>
                  Crianças de 0 até 11 anos devem adquirir ingresso na categoria
                  infantil. Crianças acima de 12 anos, devem adquirir ingresso
                  normal. Todas as idades devem adquirir ingresso para acessar
                  ao camarote!
                </AccordionContent>
              </AccordionItem>
            </Reveal>

            <Reveal>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Desisti da compra, como devo proceder?
                </AccordionTrigger>
                <AccordionContent>
                  Em caso de desistência da compra, o reembolso do valor do
                  ingresso somente será efetuado caso a solicitação seja feita
                  no prazo de até 7 (sete) dias a contar da data da compra. O
                  pedido de devolução deverá ser realizado impreterivelmente no
                  prazo de 48 (quarenta e oito) horas antes do horário de início
                  do evento. O Participante não poderá solicitar reembolso de
                  seus ingressos, o que poderá ser feito tão somente pelo
                  COMPRADOR e TITULAR (pessoa que realizou a compra pelo site),
                  salvo quando Participante e COMPRADOR forem a mesma pessoa.
                  Para solicitar o cancelamento de pedido envie e-mail para{' '}
                  <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-sm font-semibold text-transparent">
                    contato@loungebrahma.com.br
                  </span>
                  .
                  <br /> <br />
                  <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-lg font-bold text-transparent">
                    Não serão realizados cancelamentos fora dos prazos
                    estabelecidos!
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Desisti da compra, como devo proceder?
                </AccordionTrigger>
                <AccordionContent>
                  Em caso de desistência da compra, o reembolso do valor do
                  ingresso somente será efetuado caso a solicitação seja feita
                  no prazo de até 7 (sete) dias a contar da data da compra. O
                  pedido de devolução deverá ser realizado impreterivelmente no
                  prazo de 48 (quarenta e oito) horas antes do horário de início
                  do evento. O Participante não poderá solicitar reembolso de
                  seus ingressos, o que poderá ser feito tão somente pelo
                  COMPRADOR e TITULAR (pessoa que realizou a compra pelo site),
                  salvo quando Participante e COMPRADOR forem a mesma pessoa.
                  Para solicitar o cancelamento de pedido envie e-mail para{' '}
                  <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-sm font-semibold text-transparent">
                    contato@loungebrahma.com.br
                  </span>
                  .
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          </Accordion>
        </div>
      </section>

      {/* Como chegar na arena */}
      <section className="rounded-tl-[3rem] bg-zinc-900 px-4 py-14 md:rounded-tl-[5rem] lg:px-20">
        <h2 className="mb-5 border-l-4 border-l-red-700 pl-5 text-xl font-bold uppercase text-zinc-200 md:text-2xl">
          Como chegar na arena
        </h2>{' '}
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full flex-[1.5]">
            <Reveal>
              <iframe
                width="100%"
                height="450"
                loading="lazy"
                className="rounded-sm"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6437214071066!2d-46.476809488786905!3d-23.54531337872251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dec98fb855%3A0xf2b061ffbcd2ecf8!2sNeo%20Qu%C3%ADmica%20Arena!5e0!3m2!1spt-BR!2sbr!4v1736974441012!5m2!1spt-BR!2sbr"
              />
            </Reveal>
          </div>

          <div className="w-full flex-1">
            <Reveal>
              <h2 className="text-2xl font-bold text-zinc-200">
                Nossos contatos
              </h2>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-100">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-zinc-800 text-zinc-100">
                    <FaWhatsapp className="size-5" />
                  </div>
                  +55 11 99802-2480
                </div>

                <div className="flex items-center gap-2 text-zinc-100">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-zinc-800 text-zinc-100">
                    <Phone className="size-5" />
                  </div>
                  +55 11 3291-1280
                </div>

                <div className="flex items-center gap-2 text-zinc-100">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-zinc-800 text-zinc-100">
                    <Mail className="size-5" />
                  </div>
                  contato@loungebrahma.com.br
                </div>
              </div>

              <Button
                type="button"
                className="mt-5 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 uppercase text-zinc-900"
                title="Clique para criar uma rota até a arena"
              >
                <MapPin className="mr-2 size-4" />
                Criar rota até a arena
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
