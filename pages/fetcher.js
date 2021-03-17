import useSWR, { SWRConfig } from 'swr'
import fetch from 'isomorphic-fetch'
const fetcher = (url) => fetch(url).then((r) => r.json())


export default fetcher
