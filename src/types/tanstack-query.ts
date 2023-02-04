import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from ".";

export declare function useQuery<
  TQueryFnData = unknown,
  TError = AxiosError<TQueryFnData, ErrorResponse>,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn" | "initialData"
  > & {
    initialData?: () => undefined;
  }
): UseQueryResult<TData, TError>;
