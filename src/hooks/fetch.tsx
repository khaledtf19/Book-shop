import { useEffect, useState } from "react";
import { FetchBooksResult } from "../interfaces";

export const useGetBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (): Promise<FetchBooksResult | undefined> => {
    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/books/?Page1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setBooks(data.results);
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { books, loading };
};

export const useGetBooksBySearch = (search: string | undefined) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (): Promise<FetchBooksResult | undefined> => {
    try {
      setLoading(true);
      const res = await fetch(`http://127.0.0.1:8000/books?search=${search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setBooks(data.results);
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return { books, loading };
};

export const useGetBookById = (id: string | undefined) => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (): Promise<FetchBooksResult | undefined> => {
    try {
      setLoading(true);
      const res = await fetch(`http://127.0.0.1:8000/books?ids=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setBook(data.results);
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return { book, loading };
};

export const useGetBooksByPageNum = (page: string | undefined) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (): Promise<FetchBooksResult | undefined> => {
    try {
      setLoading(true);
      const res = await fetch(`http://127.0.0.1:8000/books/?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setBooks(data.results);
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return { books, loading };
};
