import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MainSlide = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
`;

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <MainSlide></MainSlide>
    </Container>
  );
};

export default ProductAll;
