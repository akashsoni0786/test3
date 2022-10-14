import { ADDTOCART, MYCHOICE, SHOWPRODUCTS } from "./Constants";

export const showdata = () => {
  console.log("action");

  return (dispatch) => {
    const url = new URL(
      "https://multi-account.sellernext.com/home/public/connector/product/getRefineProducts/"
    );
    let payload = {
      appTag: "amazon_sales_channel",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjlkN2YwNDUxYzA3NGFhMGUxNWE4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjY1NzQ3NzIyLCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNDkxMmNhZmM5ZTc5NmE0YjI2NmRmMiJ9.jZFtDEcsVkMC0BurU_FBbF0-gMfR7xYbTXkXVepAdod8PnTYNFpJ_RDViMMAR6xR85BBYFAEM0xcDvfMuW0h2NUJHmXIrQKXkiEdfBRsCEb_es4GSaz9eK-M7i83rKoSVBuIexmEzSDJ3ap7ess49smOdteZGzK46M8qe5GzlYyeaERg9CJGd-tnYuvlhpXdQsynNUfHxZHZljaLHLQRNJ1LPrHdy9PU5PT7-3dtfjvVGHmIjLujCpJEMxOPv_SH1S2PJdEBc1-RnjWSLyiMyw7pD3UAa0l6SsUwVSUePFe9GE7SnwYBN61ppxWkEm1oNtGlfEODCgSjVFJ4GRT66A",

      "Ced-Source-Id": "500",
      "Ced-Source-Name": "shopify",
      "Ced-Target-Id": "530",
      "Ced-Target-Name": "amazon",
    };

    fetch(url, {
      headers: payload,
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("products_data", JSON.stringify(result.data.rows));
        dispatch({
          type: SHOWPRODUCTS,
          payload: result.data.rows,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const show_product_data = (cid) => {
  console.log("action");

  return (dispatch) => {
    const url = new URL(
      "https://multi-account.sellernext.com/home/public/connector/product/getProduct/"
    );
    let payload = {
      target_marketplace: "amazon",
      source_marketplace: "shopify",
      sourceShopID: 500,
      targetShopID: 530,
      container_id: cid,
    };
    for (let i in payload) {
      url.searchParams.append(i, payload[i]);
    }
    fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjlkN2YwNDUxYzA3NGFhMGUxNWE4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjY1NzQ3NzIyLCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNDkxMmNhZmM5ZTc5NmE0YjI2NmRmMiJ9.jZFtDEcsVkMC0BurU_FBbF0-gMfR7xYbTXkXVepAdod8PnTYNFpJ_RDViMMAR6xR85BBYFAEM0xcDvfMuW0h2NUJHmXIrQKXkiEdfBRsCEb_es4GSaz9eK-M7i83rKoSVBuIexmEzSDJ3ap7ess49smOdteZGzK46M8qe5GzlYyeaERg9CJGd-tnYuvlhpXdQsynNUfHxZHZljaLHLQRNJ1LPrHdy9PU5PT7-3dtfjvVGHmIjLujCpJEMxOPv_SH1S2PJdEBc1-RnjWSLyiMyw7pD3UAa0l6SsUwVSUePFe9GE7SnwYBN61ppxWkEm1oNtGlfEODCgSjVFJ4GRT66A",

        "Ced-Source-Id": "500",
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": "530",
        "Ced-Target-Name": "amazon",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        dispatch({
          type: MYCHOICE,
          payload: result.data.rows,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const adding_to_cart =(e)=>{
  return{
    type:ADDTOCART,
    payload:e
  }
}