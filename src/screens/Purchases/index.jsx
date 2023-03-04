import * as React from 'react'
import { Platform, StyleSheet } from 'react-native'
import * as Purchase from '~helpers/purchase'
import { Checkbox, Click, Column, Row, Screen, ScrollView, SizedBox, Text, TextField } from '~components/bases'
import PrimaryButton from '~components/bases/PrimaryButton'

export default React.memo(({ navigation }) => {
  const [selectedId, setSelectedId] = React.useState('1')
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    const items = Platform.select({
      android: ['1', 'product_2', 'product_3', 'com.namnvscore.productid4']
    })
    Purchase.getProducts(items)
      .then((products) => {
        console.log('products', products)
        if (products && products.length > 0) {
          setProducts(products)
        }
      })
      .catch(() => {
        console.log('ScoreTHPT 23: Error when call getProducts')
        console.log(e)
      })
  }, [])

  const onBuy = async () => {
    const result = await Purchase.onBuy(selectedId).catch((e) => {
      console.log('ScoreTHPT 25 Error:')
      console.log(e)
      return false
    })
    if (!result) return
    navigation.navigate('Home')
  }

  const productElements = products.map((item) => (
    <Click key={item.productId} onPress={() => setSelectedId(item.productId)}>
      <Row
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#ccc',
          borderRadius: 10,
          marginBottom: 20,
          padding: 15,
          backgroundColor: 'white'
        }}
      >
        <Column>
          <Checkbox selected={item.productId === selectedId} />
        </Column>

        <SizedBox width={15} />

        <Column style={{ flex: 1 }}>
          <Row>
            <Text size={20} style={{ fontWeight: '600' }}>
              {item.title}
            </Text>
          </Row>
          <SizedBox height={5} />
          <Row>
            <Text size={16} style={{ color: 'gray' }}>
              {item.description}
            </Text>
          </Row>
        </Column>

        <SizedBox width={10} />

        <Column style={{ alignItems: 'flex-end' }} hidden={!!item.salePrice}>
          <Row>
            <Text
              size={20}
              style={{
                fontWeight: '600'
              }}
            >
              đ{item.price}
            </Text>
          </Row>
        </Column>
        <Column style={{ alignItems: 'flex-end' }} hidden={!item.salePrice}>
          <Row>
            <Text
              size={20}
              style={{
                fontWeight: '600'
              }}
            >
              đ{item.priceCurrencyCode}
            </Text>
          </Row>
          <Row>
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: '#ccc'
              }}
            >
              đ{item.priceAmountMicros}
            </Text>
          </Row>
        </Column>
      </Row>
    </Click>
  ))

  return (
    <Screen backgroundColor="#edf0f5">
      <ScrollView
        style={{
          paddingVertical: 50,
          paddingHorizontal: 20
        }}
      >
        <Row style={{ justifyContent: 'center' }}>
          <Text size={24} style={{ fontWeight: '600' }}>
            ƯU ĐÃI LIMITED LẦN
          </Text>
        </Row>
        <SizedBox height={10} />
        <Row style={{ justifyContent: 'center' }}>
          <Text size={18}>GIẢM GIÁ 50% CHỈ TRONG NĂM</Text>
        </Row>

        <Row style={{ marginVertical: 15, justifyContent: 'center' }}>
          <Column style={styles.countdown.item.column}>
            <Text size={20} style={styles.countdown.item.text}>
              17
            </Text>
          </Column>

          <Column style={styles.countdown.separator.column}>
            <Text size={20} style={styles.countdown.separator.text}>
              :
            </Text>
          </Column>

          <Column style={styles.countdown.item.column}>
            <Text size={20} style={styles.countdown.item.text}>
              17
            </Text>
          </Column>

          <Column style={styles.countdown.separator.column}>
            <Text size={20} style={styles.countdown.separator.text}>
              :
            </Text>
          </Column>

          <Column style={styles.countdown.item.column}>
            <Text size={20} style={styles.countdown.item.text}>
              11
            </Text>
          </Column>
        </Row>

        <SizedBox height={20} />

        {productElements}

        <PrimaryButton text="Đăng ký ngay" active style="py-3 mb-10" onPress={onBuy}></PrimaryButton>
      </ScrollView>
    </Screen>
  )
})

const styles = StyleSheet.create({
  countdown: {
    item: {
      column: {
        backgroundColor: 'white',
        borderRadius: 6,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      text: {
        fontWeight: '700'
      }
    },
    separator: {
      column: {
        justifyContent: 'center',
        margin: 10
      },
      text: {
        fontWeight: '700'
      }
    }
  }
})
