import { MetaInterface } from "./meta.interface";

export interface MetaResponse<T> {
    meta: MetaInterface;
    data: T[];
}