import useSWR from 'swr';
import { useRouter } from 'next/router';
import addressState from '../store/atoms/addressAtom';
import { useRecoilState } from 'recoil';

export default function getRestaurants() {
  const [ address] = useRecoilState(addressState);
  const router = useRouter();
  const {category, q} = router.query;

  let params = '';
  if(category){
    params= `${params == '' ? '?' : '&' }category=${category}`
  }
  if(q){
    params= `${params == '' ? '?' : '&' }q=${q}`
  }
  if(address.city != ''){
    params= `${params == '' ? '?' : '&' }city=${address.city}`
  } 

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.apiUrl}/api/restaurants${params}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  return { restaurants: data, isLoading: !error && !data, isError: error }
}