interface LoginProps {
  setWeb3Instance: () => void
}

export const Login = (props: LoginProps) => {
  return (
    <div>
      <button
        className="border-2	border-black rounded-md	p-4 bg-black text-white mt-10"
        onClick={props.setWeb3Instance}
      >
        Connect Metamask
      </button>
    </div>
  )
}