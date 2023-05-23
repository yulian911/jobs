export const checkImageURL = url => {
  if (!url) return false
  else {
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i')
    return pattern.test(url)
  }
}

// FULLTIME, CONTRACTOR, PARTTIME, INTERN
export const employmentTypesData = ['FULLTIME', 'CONTRACTOR', 'PARTTIME', 'INTERN']
export const postedDate = ['all', 'today', '3days', 'week', 'month']
export const jobRequirements = [
  { name: 'under_3_years_experience', text: 'Under 3 years experience' },
  { name: 'more_than_3_years_experience', text: 'More than 3 years experience' },
  { name: 'no_experience', text: 'No experience' },
  { name: 'no_degree', text: 'No degree' },
]
// source={{
//     uri: checkImageURL(companyLogo)
//       ? companyLogo
//       : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
//   }}
