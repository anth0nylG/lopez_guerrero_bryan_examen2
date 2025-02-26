import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets";
import {
  BoxItemCategories,
  BoxItemTopProduct,
  Header,
} from "../../components/molecules";
import { Gap } from "../../components/atoms";
import {
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
} from "../../assets/images/Icons";

import {
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
} from "../../assets/images/Illustrations";

import { getProducts } from "../../api/index";

const Home = ({ navigation, route, token }) => {
  const handleAddToCart = route.params;
  const isDarkMode = useColorScheme() === "dark";

  const dataTopProducts = [
    {
      name: "Uvas",
      icon: IL_Grapes_PNG,
      bgColor: "rgba(227,206,243,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Tomate",
      icon: IL_Tomato_PNG,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Batidos",
      icon: IL_Greentea_PNG,
      bgColor: "rgba(187, 208, 136, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Coliflor",
      icon: IL_Cauliflawer_PNG,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Uvas",
      icon: IL_Grapes_PNG,
      bgColor: "rgba(227,206,243,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Tomate",
      icon: IL_Tomato_PNG,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Batidos",
      icon: IL_Greentea_PNG,
      bgColor: "rgba(187, 208, 136, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Coliflor",
      icon: IL_Cauliflawer_PNG,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(token.token);
  }, []);

  const fetchProducts = async (token) => {
    const products = await getProducts(token);
    setProducts(products);
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.flex1}>
        {/* Header */}
        {/* <Header drawer /> */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.tittleTopProducts}>Carrito App</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* search */}
          {/* <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Buscar" style={styles.textInputSearch} />
              <IC_Search />
            </View>
          </View> */}
          {/* categories */}
          <View>
            <Text style={styles.titleCategories}>Categorías</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}
            >
              <BoxItemCategories
                icon={<IC_Fruits />}
                color="rgba(169, 178, 169, 0.5)"
                text="Frutas"
                onPress={() => navigation.navigate("Categories", "Fruits")}
              />
              <BoxItemCategories
                icon={<IC_Vegetables />}
                color="rgba(233, 255, 210, 0.5)"
                text="Vegetales"
                onPress={() => navigation.navigate("Categories", "Vegetables")}
              />
              <BoxItemCategories
                icon={<IC_Drinks />}
                color="rgba(140, 175, 53, 0.5)"
                text="Bebidas"
                onPress={() => navigation.navigate("Categories", "Drinks")}
              />
              <BoxItemCategories
                icon={<IC_Bakery />}
                color="rgba(214, 255, 218, 0.5)"
                text="Panadería"
                onPress={() => navigation.navigate("Categories", "Bakery")}
              />
              <BoxItemCategories
                icon={<IC_Bakery2 />}
                color="rgba(255, 250, 204, 0.5)"
                text="Pastelería"
                onPress={() => navigation.navigate("Categories", "Bakery")}
              />
            </ScrollView>
          </View>
          <Gap height={24} />

          {/* top products */}

          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.tittleTopProducts}>Top Productos</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>Ver todo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
              {products ? (
                products.map((item) => {
                  return (
                    <BoxItemTopProduct
                      key={item._id}
                      bgColor="rgba(140, 250, 145,0.5)"
                      img={item.img}
                      text={item.name}
                      stock={item.stock}
                      price={item.price}
                      onPress={() => navigation.navigate("Detail", { item })} //
                    />
                  );
                })
              ) : (
                <Text style={styles.textSeeAll}>Cargando</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  titleCategories: {
    fontSize: 18,
    // fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  scrollViewCategories: {
    paddingLeft: 40,
  },
  wrapperHeadTopProducts: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tittleTopProducts: {
    color: colors.primary,
    // fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  textSeeAll: {
    color: colors.black,
    // fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
