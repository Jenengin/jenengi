// pages/api/generate-name.js


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { keyword, type } = req.body;

    if (!keyword || !type) {
      return res.status(400).json({ error: 'Keywords and type are required' });
    }


    const names = generateNames(keyword, type);
    
    res.status(200).json({ names });
  } catch (error) {
    console.error('Name generation error:', error);
    res.status(500).json({ error: 'Error generating names' });
  }
}


function generateNames(keyword, type) {
  const word = keyword.toLowerCase();
  const results = [];
  
  const prefixes = {
    'project': ['Project', 'Next', 'Ultra', 'Super', 'Mega'],
    'company': ['Tekno', 'Global', 'Future', 'Quantum', 'Smart'],
    'brand': ['i', 'e', 'my', 'pro', 'neo'],
    'human': ['Adi', 'Budi', 'Cahya', 'Dewi', 'Eko']
  };
  
  const suffixes = {
    'project': ['Pro', 'Plus', 'Next', 'Hub', 'Space'],
    'company': ['Tech', 'Solutions', 'Inc', 'Group', 'Enterprise'],
    'brand': ['ify', 'ly', '.io', 'hub', 'go'],
    'human': ['wan', 'anto', 'wati', 'yono', 'ningsih']
  };
  
  const typeSpecific = type in prefixes ? type : 'brand';
  
  for (const prefix of prefixes[typeSpecific]) {
    results.push(prefix + capitalize(word));
  }
  
  for (const suffix of suffixes[typeSpecific]) {
    results.push(capitalize(word) + suffix);
  }
  
  results.push(capitalize(word) + 'verse');
  results.push('The' + capitalize(word));
  
  if (type === 'brand' || type === 'company') {
    results.push(capitalize(word) + 'AI');
    results.push('AI' + capitalize(word));
    results.push(capitalize(word) + 'X');
  }
  
  return [...new Set(results)].slice(0, 10);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}