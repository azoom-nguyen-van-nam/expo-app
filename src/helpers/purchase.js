import Constants from 'expo-constants'
const isRunningInExpoGo = Constants.appOwnership === 'expo'

export const getProducts = async (productIds) => {
  console.log(Constants)
  if (isRunningInExpoGo) return []
  const InAppPurchases = await import('expo-in-app-purchases')
  await InAppPurchases.connectAsync()
  const results = await InAppPurchases.getProductsAsync(productIds).catch((e) => {
    console.log('ScoreTHPT 10: Error when call getProducts')
    console.log(e)
    return false
  })
  console.log('ScoreTHPT 14: ', products)
  const { responseCode, results: products } = results
  console.log('ScoreTHPT 16', responseCode, products)

  if (!products) {
    await InAppPurchases.disconnectAsync()
    return []
  }
  return products
}

export const onBuy = async (productId) => {
  if (isRunningInExpoGo) return true
  const InAppPurchases = await import('expo-in-app-purchases')

  const purchase = await InAppPurchases.purchaseItemAsync(productId)
  if (!purchase) return false

  return new Promise((resolve, reject) => {
    InAppPurchases.setPurchaseListener(async ({ responseCode, results, errorCode }) => {
      if (responseCode === InAppPurchases.IAPResponseCode.OK) {
        results.forEach(async (purchase) => {
          if (!purchase.acknowledged) {
            console.log('ScoreTHPT 37')
            await InAppPurchases.finishTransactionAsync(purchase)
          }
        })
        await InAppPurchases.disconnectAsync()
        return resolve(true)
      }

      if (responseCode === InAppPurchases.IAPResponseCode.USER_CANCELED) {
        await InAppPurchases.disconnectAsync()
        return reject(new Error('User canceled the transaction'))
      }

      await InAppPurchases.disconnectAsync()
      return reject(new Error('Something went wrong with the purchase'))
    })
  })
}
