import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader/Loader";
import LinksList from "../components/LinksList/LinksList";

const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const getLinks = useCallback(async () => {
    try {
      const data = await request(`/api/link`, "GET", null, {
        Authorization: `Bearer ${token}`
      });
      setLinks(data);
    } catch (e) {}
  }, [request, token]);

  useEffect(() => {
    getLinks();
  }, [getLinks]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && <LinksList links={links} />}</>;
};

export default LinksPage;
