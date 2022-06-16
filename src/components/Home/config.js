import { PersonOutline, ShoppingCartOutlined, MonetizationOnOutlined, AccountBalanceWalletOutlined } from "@mui/icons-material";

export const widgetsData = [
  {
    title: "Users",
    data: {
      type: "positive",
      change: "+5%",
      item: "720",
      link: "See all users"
    },
    icon: <PersonOutline style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} className="widget-icon"/>
  },
  {
    title: "Orders",
    data: {
      type: "negative",
      change: "-2%",
      item: "260",
      link: "See all orders"
    },
    icon: <ShoppingCartOutlined style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)" }} className="widget-icon"/>
  },
  {
    title: "Earnings",
    data: {
      type: "positive",
      change: "+12%",
      item: "$4.6k",
      link: "View net earnings"
    },
    icon: <MonetizationOnOutlined style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} className="widget-icon"/>
  },
  {
    title: "My Balance",
    data: {
      type: "positive",
      change: "+7%",
      item: "$7.8k",
      link: "See details"
    },
    icon: <AccountBalanceWalletOutlined style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} className="widget-icon"/>
  }
];