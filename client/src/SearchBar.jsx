const SearchBar = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="form-input custom-select-arrow w-full max-w-xs bg-devflow-component-bg border border-devflow-border-light text-devflow-text-white rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
  />
);

export default SearchBar; 