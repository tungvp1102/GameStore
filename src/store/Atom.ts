import axios from 'axios'
import {useAtom , atom} from 'jotai'
import { useEffect,useState } from 'react'
import { ProductType } from '../@type/product'


export const productAtom = atom<ProductType[]>([]);
